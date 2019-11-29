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

function animateHeadText(){
    let text = $('.my-description');
    text.addClass('my-descriptionShow');
}

function animateLinks(selector){
    let menuList = $(selector);
    menuList.on('click', 'a', function(event){
        event.preventDefault();
        let id = $(this).attr('href'),
        top =$(id).offset().top;
        $('body, html').animate({scrollTop: top},800);
    })
}

$(window).scroll(function () {
    viewMenu();
});

$(document).ready(function () {
    openMobileMenu();
    animateHeadText();
    animateLinks('.navbar-list');
    animateLinks('.my-descriptionShow');
});