function slowScroll(e){return $("html, body").animate({scrollTop:$(e).offset().top-50},501),!1}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".first-block").classList.add("animated"),document.querySelector(".second-block").classList.add("animated"),document.querySelector(".third-block").classList.add("animated"),document.querySelector(".social").classList.add("animated"),document.querySelector(".about-me").classList.add("animated")}),$(".header-top .menu").on("click",function(){$("header .mobile-menu").is(":visible")?$(this).html('<i class="fas fa-bars"></i>'):$(this).html('<i class="fas fa-times"></i>'),$("header .mobile-menu").slideToggle()});const sr=ScrollReveal({origin:"top",distance:"30px",duration:2e3,reset:!0});sr.reveal(".header-main, .about-me,\n            .services, .form",{interval:200});