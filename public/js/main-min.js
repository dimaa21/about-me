function slowScroll(e){return $("html, body").animate({scrollTop:$(e).offset().top-50},500),!1}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".first-block").classList.add("animated"),document.querySelector(".second-block").classList.add("animated"),document.querySelector(".third-block").classList.add("animated"),document.querySelector(".social").classList.add("animated"),document.querySelector(".about-me").classList.add("animated")}),$(".header-top .menu").on("click",function(){$("header .mobile-menu").is(":visible")?$(this).html('<i class="fas fa-bars"></i>'):$(this).html('<i class="fas fa-times"></i>'),$("header .mobile-menu").slideToggle()}),document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiper-container",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});