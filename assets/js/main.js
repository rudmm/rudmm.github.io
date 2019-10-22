function viewMenu(){
    let menu = $('.header .navbar');
    let scroll = $(window).scrollTop();
    if(scroll>0){
        menu.addClass('view');
    }else{
        menu.removeClass('view');
    }
}

function openMobileMenu(){
    let btn = $('.header .navbar .btn');
    let mobile = $('.header .navbar .mobile');
    btn.click(function () {
        mobile.toggle();
        btn.toggleClass('open');

    });
}

$(window).scroll(function () {
    viewMenu();
});

$(document).ready(function () {
    openMobileMenu();
});