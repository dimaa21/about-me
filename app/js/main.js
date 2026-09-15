function slowScroll(selector) {
  const target = document.querySelector(selector);
  if (!target) {
    return false;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
  return false;
}

document.querySelectorAll('[data-scroll]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    slowScroll(link.dataset.scroll);
  });
});

const menuButton = document.querySelector('.header-top .menu');
const mobileMenu = document.querySelector('header .mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuButton.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    });
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
  modal.style.display = 'none';
  document.body.style.overflow = '';
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
  contactForm.addEventListener('submit', (event) => {
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

    const formData = new FormData(contactForm);
    const originalButtonText = submitButton ? submitButton.textContent : 'Send message';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json().then((data) => ({ ok: response.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) {
          throw new Error(data.error || 'Failed to send message.');
        }

        if (modal) {
          modal.classList.add('is-open');
          modal.style.display = 'grid';
          document.body.style.overflow = 'hidden';
        }
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      });
  });
}
