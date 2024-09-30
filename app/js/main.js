document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.first-block').classList.add('animated');
  document.querySelector('.second-block').classList.add('animated');
  document.querySelector('.third-block').classList.add('animated');
  document.querySelector('.social').classList.add('animated');
  document.querySelector('.about-me').classList.add('animated');
});

function slowScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 50
    }, 501);
    return false;
}

// Обробник подій, буде спрацьовувати при натисненні на нього
$(".header-top .menu").on("click", function() {
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars"></i>');
    else
        $(this).html('<i class="fas fa-times"></i>');

    $("header .mobile-menu").slideToggle();
})

// Скрол ефект при наведенні на певний блок
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.header-main, .about-me, .my-stack,
            .services, .reviews,  .project, .review, .form`, {
    interval: 200
})

// Слайдер 

const swiper = new Swiper('.js-reviews-slider', {
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

  //  Модальне вікно
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігти стандартному відправленню форми

    // Очистити попередні повідомлення про помилки
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');

    // Валідація форми
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
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
        return; // Якщо форма не валідна, не відправляти
    }

    // Відправлення даних на електронну пошту
    const formData = new FormData(this);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Показати модальне вікно
            document.getElementById('modal').style.display = 'block';
            // Очистити форму
            this.reset();
        } else {
            return response.text().then(text => {
                throw new Error(text);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    });
});



