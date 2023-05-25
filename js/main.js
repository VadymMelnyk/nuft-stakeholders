$(function() {
    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });
    if (document.documentElement.clientWidth > 900) {
        $('.main__menu-item').hover(function() {
                $(this).toggleClass('main__menu-item--active');
            });
            $('.main__list-item').hover(function() {
                $(this).toggleClass('main__list-item--active');
            }); 
    } else {
        $('.main__menu-title').on('click', function() {
            $(this).parent().toggleClass('main__menu-item--active');
            $(this).closest('.main__menu-item').find('.main__list-item--active').removeClass('main__list-item--active');
        });
        $('.main__list-item').on('click', function() {
            $(this).toggleClass('main__list-item--active');
        });
    };

});
