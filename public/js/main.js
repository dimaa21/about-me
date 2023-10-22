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
    }, 500);
    return false;
}

$(".header-top .menu").on("click", function() {
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars"></i>');
    else
        $(this).html('<i class="fas fa-times"></i>');

    $("header .mobile-menu").slideToggle();
})

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    if (index < slides.length - 1) {
        index++;
        updateSlider();
    }
}

function prevSlide() {
    if (index > 0) {
        index--;
        updateSlider();
    }
}

document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Automatic slide change
setInterval(nextSlide, 5000);


