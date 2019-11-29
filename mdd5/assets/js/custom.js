function menu(){
    let scroll = $(window).scrollTop();
    let header = $('.header');
    if(scroll>0){
        header.addClass('active');
    }else{
        header.removeClass('active');
    }
}

function clickBurger(){
    let btn = $('.btn-menu');
    let navbar = $('.nav-bar');
    btn.click(function(){
        btn.toggleClass('open');
        navbar.slideToggle();
        let navbaritem = $('.nav-bar li a');
        for(let i =0;i<navbaritem.length;i++){
            navbaritem.eq(i).click(function(){
                btn.removeClass('open');
                navbar.slideUp();
            });
        }
    });
}
function menuClick(){
    $(".menu-bar").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
}
$(window).scroll(function(){
    menu();
});
$(document).ready(function(){
    clickBurger();
    menuClick();
});