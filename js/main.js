let button = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

    button.addEventListener('click', function() {
	    menu.classList.toggle('menu__list--active');
    });

$('.menu a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target 
    }, 1500);
    $('.menu__list').removeClass('menu__list--active');
});
