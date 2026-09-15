document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.first-block').classList.add('animated');
  document.querySelector('.second-block').classList.add('animated');
  document.querySelector('.third-block').classList.add('animated');
  document.querySelector('.social').classList.add('animated');
  document.querySelector('.about-me').classList.add('animated');
});

function slowScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 80
    }, 501);
    return false;
}

$(".header-top .menu").on("click", function() {
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars"></i>');
    else
        $(this).html('<i class="fas fa-times"></i>');

    $("header .mobile-menu").slideToggle();
})

$("header .mobile-menu a").on("click", function() {
    $("header .mobile-menu").slideUp();
    $(".header-top .menu").html('<i class="fas fa-bars"></i>');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '24px',
    duration: 800,
    reset: false
});

sr.reveal(`.header-main, .about-me, .my-stack,
            .services, .reviews,  .project, .experience, .review, .form`, {
    interval: 200
})

// Слайдер
const reviewsSlider = document.querySelector('.js-reviews-slider');
if (reviewsSlider) {
  new Swiper(reviewsSlider, {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2
      }
    }
  });
}

const contactForm = document.getElementById('form');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

function closeModal() {
  if (modal) {
    modal.classList.remove('is-open');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const submitButton = this.querySelector('button[type="submit"]');

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

    if (!this.action || this.action.includes('YOUR_FORM_ID')) {
      alert('Add your Formspree form ID in the form action to send messages.');
      return;
    }

    const formData = new FormData(this);
    const originalButtonText = submitButton ? submitButton.textContent : 'Submit';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json().then(data => ({ ok: response.ok, data })))
      .then(({ ok, data }) => {
        if (ok) {
          if (modal) {
            modal.classList.add('is-open');
            modal.style.display = 'grid';
            document.body.style.overflow = 'hidden';
          }
          this.reset();
          return;
        }

        throw new Error(data.error || 'Failed to send message.');
      })
      .catch(error => {
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



