const HEADER_OFFSET = 80;

function slowScroll(selector) {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href || href.length < 2) {
    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    slowScroll(href);
  });
});

const menuButton = document.querySelector('.header-top .menu');
const mobileMenu = document.querySelector('header .mobile-menu');

if (menuButton && mobileMenu) {
  const setMenuOpen = (open) => {
    mobileMenu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuButton.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(!mobileMenu.classList.contains('is-open'));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
}

if (typeof ScrollReveal === 'function') {
  ScrollReveal({
    origin: 'top',
    distance: '24px',
    duration: 800,
    reset: false
  }).reveal('.header-main, .about-me, .my-stack, .services, .project, .experience, .form', {
    interval: 200
  });
}

const contactForm = document.getElementById('form');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function openModal() {
  if (!modal) {
    return;
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach((message) => {
      message.textContent = '';
    });

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    let valid = true;

    if (!name) {
      document.getElementById('name-error').textContent = 'Please enter your name.';
      valid = false;
    }
    if (!email) {
      document.getElementById('email-error').textContent = 'Please enter your email.';
      valid = false;
    }
    if (!message) {
      document.getElementById('message-error').textContent = 'Please enter your message.';
      valid = false;
    }
    if (!valid) {
      return;
    }

    const originalButtonText = submitButton ? submitButton.textContent : 'Send message';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      openModal();
      contactForm.reset();
    } catch (error) {
      alert('An error occurred: ' + error.message);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}
