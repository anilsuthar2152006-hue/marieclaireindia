/**
 * Marie Claire Salon India - Global JavaScript
 * Handles transitions, scroll animations, responsive menus, validations, and interactive widgets.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollAnimations();
  initScrollToTop();
  initActiveNavLink();
  initLightbox();
});

/**
 * Sticky Header Scroll transition
 */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 40) {
      header.classList.remove('py-4');
      header.classList.add('py-2', 'shadow-md', 'scrolled');
      
      // If header is transparent, make it white
      if (header.classList.contains('bg-transparent')) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-pure-white');
      }
    } else {
      header.classList.remove('py-2', 'shadow-md', 'scrolled');
      header.classList.add('py-4');
      
      // If we are on a page where the header should be transparent when not scrolled
      // (like Gallery or Book Appointment), restore transparency.
      const isTransparentPage = window.location.pathname.includes('gallery.html') || 
                               window.location.pathname.includes('book-appointment.html') ||
                               window.location.pathname.endsWith('/') || 
                               window.location.pathname.endsWith('index.html');
      
      // Check if original markup had bg-transparent (for gallery/book appointment)
      const hasTransparentClass = header.getAttribute('data-transparent') === 'true' || 
                                  window.location.pathname.includes('gallery.html') ||
                                  window.location.pathname.includes('book-appointment.html');

      if (hasTransparentClass) {
        header.classList.remove('bg-pure-white');
        header.classList.add('bg-transparent');
      }
    }
  };

  // Track original transparency setting
  if (header.classList.contains('bg-transparent')) {
    header.setAttribute('data-transparent', 'true');
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
}

/**
 * Mobile Navigation Drawer controller
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('header button.md\\:hidden');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (!toggleBtn || !mobileNav) return;

  // Create a backdrop overlay if it doesn't exist
  let backdrop = document.getElementById('mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobile-nav-backdrop';
    backdrop.className = 'fixed inset-0 bg-on-background/40 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity duration-300';
    document.body.appendChild(backdrop);
  }

  const openDrawer = () => {
    mobileNav.classList.remove('-translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    mobileNav.classList.add('-translate-x-full');
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  toggleBtn.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Hook up close button inside drawer if present
  const closeBtn = mobileNav.querySelector('button');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }
}

/**
 * IntersectionObserver for premium scroll animations
 */
function initScrollAnimations() {
  // Elements with fade-in-up or similar classes should be wrapped with "reveal" style
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    // Add base reveal class and specific transformation type
    el.classList.add('reveal');
    if (el.classList.contains('fade-in-up')) {
      el.classList.add('reveal-up');
    } else if (el.classList.contains('fade-in-left')) {
      el.classList.add('reveal-left');
    } else if (el.classList.contains('fade-in-right')) {
      el.classList.add('reveal-right');
    } else if (el.classList.contains('scale-in')) {
      el.classList.add('reveal-scale');
    }
    observer.observe(el);
  });
}

/**
 * Smooth Scroll-To-Top Button
 */
function initScrollToTop() {
  // Check if button exists, if not create it
  let btn = document.getElementById('scroll-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'scroll-to-top';
    btn.className = 'fixed bottom-8 left-8 z-40 w-12 h-12 bg-on-background text-pure-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 pointer-events-auto';
    btn.innerHTML = '<span class="material-symbols-outlined text-xl">arrow_upward</span>';
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Highlights active link in Navbar and Mobile Menu
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('header nav a, #mobile-nav nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    // Check if link matches current page
    if (currentPath.includes(href)) {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
      if (link.tagName === 'A' && link.parentElement.tagName !== 'LI') {
        link.classList.add('border-b', 'border-primary', 'pb-1');
      }
    } else {
      // Remove active classes if they were copied from static templates
      // but only if it's not actually the current page.
      if (!currentPath.includes(href)) {
        link.classList.remove('text-primary', 'font-bold', 'border-b', 'border-primary', 'pb-1');
        link.classList.add('text-on-surface-variant');
      }
    }
  });
}

/**
 * Interactive Lightbox for Gallery previews
 */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length === 0) return;

  // Create Lightbox HTML elements if not already in document
  let lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox fixed inset-0 bg-on-background/95 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-md';
    lightbox.innerHTML = `
      <button class="absolute top-6 right-6 text-pure-white hover:text-primary transition-colors p-2" id="lightbox-close">
        <span class="material-symbols-outlined text-4xl">close</span>
      </button>
      <div class="lightbox-content max-w-4xl max-h-[80vh] relative flex flex-col items-center">
        <img src="" alt="Enlarged gallery view" class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl">
        <p class="text-pure-white font-display-lg text-2xl mt-4 text-center" id="lightbox-title"></p>
        <p class="text-primary font-body-md text-label-md uppercase tracking-wider mt-1" id="lightbox-subtitle"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('#lightbox-title');
  const lightboxSubtitle = lightbox.querySelector('#lightbox-subtitle');
  const closeBtn = lightbox.querySelector('#lightbox-close');

  const openLightbox = (imgEl) => {
    lightboxImg.src = imgEl.src;
    // Attempt to extract title/subtitle from siblings or metadata attributes
    const cardEl = imgEl.closest('.relative');
    if (cardEl) {
      const titleEl = cardEl.querySelector('.p-4 p:first-child');
      const subtitleEl = cardEl.querySelector('.p-4 p:nth-child(2)');
      
      lightboxTitle.textContent = titleEl ? titleEl.textContent : (imgEl.alt || 'Marie Claire Masterpiece');
      lightboxSubtitle.textContent = subtitleEl ? subtitleEl.textContent : 'Portfolio';
    } else {
      lightboxTitle.textContent = imgEl.alt || 'Marie Claire Masterpiece';
      lightboxSubtitle.textContent = 'Portfolio';
    }
    
    lightbox.classList.add('active');
    document.body.classList.add('overflow-hidden');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  };

  galleryItems.forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/**
 * Validates text inputs and displays success dialog
 * @param {HTMLFormElement} form
 * @param {Function} onSuccess
 */
window.handleFormSubmit = function(form, onSuccess) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
      // Basic check
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('border-error');
      } else {
        input.classList.remove('border-error');
      }

      // Email format check
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          isValid = false;
          input.classList.add('border-error');
        }
      }
    });

    if (isValid) {
      onSuccess();
      form.reset();
    }
  });
};

/**
 * Creates and displays an elegant success modal popup
 * @param {string} title 
 * @param {string} message 
 */
window.showSuccessModal = function(title, message) {
  let modal = document.getElementById('global-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'global-success-modal';
    modal.className = 'success-modal fixed inset-0 bg-on-background/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm';
    modal.innerHTML = `
      <div class="bg-cream-bg p-8 md:p-12 rounded-xl max-w-md w-full text-center border border-champagne shadow-2xl scale-95 transition-transform duration-300">
        <div class="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="material-symbols-outlined text-primary text-3xl">check</span>
        </div>
        <h3 class="font-display-lg text-headline-md text-on-background mb-4" id="success-modal-title"></h3>
        <p class="font-body-md text-body-md text-on-surface-variant mb-8" id="success-modal-message"></p>
        <button class="bg-on-background text-pure-white px-8 py-3 rounded font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary transition-colors w-full" id="success-modal-close">
          Close
        </button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.querySelector('#success-modal-title').textContent = title;
  modal.querySelector('#success-modal-message').textContent = message;
  
  const innerCard = modal.querySelector('div');
  modal.classList.add('active');
  setTimeout(() => innerCard.classList.remove('scale-95'), 10);
  document.body.classList.add('overflow-hidden');

  const closeBtn = modal.querySelector('#success-modal-close');
  const closeModal = () => {
    innerCard.classList.add('scale-95');
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  };
  
  closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
};
