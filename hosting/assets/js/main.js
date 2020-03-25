function languageSelect(){
    let languageList = jQuery('.language-wrapper ul');
    languageList.hover(function(){
        languageList.addClass('open');
    },
    function(){
        languageList.removeClass('open');
    });
}

function subMenuOpen(){
    let menuHasChildren = jQuery('#navmenu ul li.menu-item-has-children');
    menuHasChildren.each(function(i){
        menuHasChildren.eq(i).hover(function(){
            let submenu = menuHasChildren.eq(i).children('.sub-menu');
            submenu.eq(0).fadeIn("slow");
        },
        function(){
            let submenu = menuHasChildren.eq(i).children('.sub-menu');
            submenu.eq(0).fadeOut("slow");
        });
    });
}

function homeTopSlider(){
    let slider = jQuery('.topslider .slider');
    slider.slick({
        infinite: true,
        arrows: true,
        slidesToShow:1,
        autoplay: true,
        fade: true,
        speed: 1000,
        autoplaySpeed: 3000,
        prevArrow: jQuery('.arrows-slider .prev'),
        nextArrow: jQuery('.arrows-slider .next'),
    });
}

function topMenuHover(){
    let topmenu = jQuery('.top-menu ul li');
    topmenu.each(function(i){
        topmenu.eq(i).hover(function(){
            topmenu.eq(i).addClass('active-hover');
        },
        function(){
            topmenu.eq(i).removeClass('active-hover');
        });
    });
}

function advantagesSlider(){
    let advantagesSlider = jQuery('.advantages-slider');
    advantagesSlider.slick({
        arrows: false,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        appendDots: jQuery('.advantages-slider-dots')
    });
}

function reviewsSlider(){
    let reviewsSlider = jQuery('.reviews-list');
    reviewsSlider.slick({
        variableWidth: true,
        //centerMode:true,
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        appendDots: jQuery('.reviews-slider-dots')
    });
}

function dataSlider(){
    let bigSlider = jQuery('.data-slider .bigslider');
    let smallSlider = jQuery('.data-slider .smallslider');
    bigSlider.slick({
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true, 
        asNavFor: '.data-slider .smallslider'
    });
    smallSlider.slick({
        infinite:true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.data-slider .bigslider',
        focusOnSelect: true,
        arrows: false,
        dots: true,
        appendDots: jQuery('.dots-data-slider')
    });
}

function pricesSlider(){
    let pricesSlider = jQuery('.slider-prices');
    pricesSlider.slick({
        slidesToShow:5,
        arrows: false,
        draggable: false
    });
}

jQuery(document).ready(function(){
    languageSelect();
    subMenuOpen();
    homeTopSlider();
    advantagesSlider();
    reviewsSlider();
    topMenuHover();
    dataSlider();
    pricesSlider();
});