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

  const reviews = document.querySelectorAll('.review');
  let currentReview = 0;

  function showReview(index) {
    if (index < 0) {
      currentReview = reviews.length - 1;
    } else if (index >= reviews.length) {
      currentReview = 0;
    }

    reviews.forEach((review, i) => {
      if (i === currentReview) {
        review.style.display = 'block';
      } else {
        review.style.display = 'none';
      }
    });
  }

  function nextReview() {
    showReview(currentReview + 2);
  }

  function prevReview() {
    showReview(currentReview - 1);
  }

  // Відображення першого відгуку
  showReview(currentReview);

  // Додавання обробників подій для кнопок навігації (опціонально)
  document.querySelector('.prev').addEventListener('click', prevReview);
  document.querySelector('.next').addEventListener('click', nextReview);

