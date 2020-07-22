AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// burger
$('.menu_btn').on('click', function(e) {
    e.preventDefault;
    $('.menu_btn').toggleClass('menu_btn_active');
    $('.nav_menu').toggleClass('nav_menu_active');
})

$('.nav_link').on('click', function(e) {
    e.preventDefault;
    $('.menu_btn').removeClass('menu_btn_active', 1000, "easeInBack" );
    $('.nav_menu').removeClass('nav_menu_active', 1000, "easeInBack" );
})

// Отправка заявки 
$(document).ready(function() {
    $('#form').submit(function() {
        if (document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $('.js-overlay-thank-you').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

$(function(){
    $("#phone").mask("8 (999) 999-99 99");
  });

