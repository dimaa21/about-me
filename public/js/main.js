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

// Обробник подій, буде спрацьовувати при натисненні на нього
$(".header-top .menu").on("click", function() {
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars"></i>');
    else
        $(this).html('<i class="fas fa-times"></i>');

    $("header .mobile-menu").slideToggle();
})


    function submitForm() {
      var formData = $('#contactForm').serialize();

      $.ajax({
        type: 'POST',
        url: 'process-form.php', // Замініть це на шлях до вашого серверного скрипта
        data: formData,
        success: function(response) {
          alert('Form submitted successfully!');
        },
        error: function(error) {
          alert('Error submitting form.');
        }
      });
    }





