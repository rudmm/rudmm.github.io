function languageSelect(){
    let languageList = jQuery('.language-wrapper ul');
    
    languageList.hover(function(){
        languageList.addClass('open');
    },function(){
        languageList.removeClass('open');
    });
}

function mobileLanguageSwitch(){
    let languages = jQuery('.top-mobile .menu-language li a');
    languages.each(function(i){
        languages.eq(i).text(languages.eq(i).attr('lang').substr(0,2));
    });
}

function subMenuOpen(){
    let menuHasChildren = jQuery('#navmenu ul li.menu-item-has-children');
    menuHasChildren.each(function(i){
        menuHasChildren.eq(i).hover(function(){
            let submenu = menuHasChildren.eq(i).children('.sub-menu');
            submenu.eq(0).slideDown();
        },
        function(){
            let submenu = menuHasChildren.eq(i).children('.sub-menu');
            submenu.eq(0).slideToggle();
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
        appendDots: jQuery('.advantages-slider-dots'),
        responsive: [
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
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
        appendDots: jQuery('.reviews-slider-dots'),
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    variableWidth:false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
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
        appendDots: jQuery('.dots-data-slider'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}

function pricesSlider(){
    let pricesSlider = jQuery('.slider-prices');
    pricesSlider.slick({
        slidesToShow:5,
        arrows: true,
        draggable: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

function mobileMenuOpen(){
    let btn = jQuery('.mobile-block > .btn-menu');
    let btnclose = jQuery('.top-mobile .btn-menu');
    let hiddenBlock = jQuery('.hidden-block');
    let menuContent = jQuery('.menu-content');
    let hasChildrenItem = jQuery('.mobile-block .menu-item-has-children');
    let body = jQuery('body');
    hasChildrenItem.each(function(i){
        let submenu = hasChildrenItem.eq(i).children('.sub-menu');
        hasChildrenItem.eq(i).click(function(){
            submenu.slideToggle();
        });
    });
    btn.click(function(){
        hiddenBlock.addClass('open');
        setTimeout(function(){
            menuContent.addClass('show');
        }, 50);
        body.addClass('fixed');
    });
    btnclose.click(function(){
        
        menuContent.removeClass('show');
        setTimeout(function(){
            hiddenBlock.removeClass('open');
        }, 500);
        body.removeClass('fixed');
    });
}

function dedicatedSlider(){
    let slider = jQuery('.nd-dedicated .dedicated-wrapper .bottom-dedicated');
    slider.slick({
        arrows: true,
        slidesToShow: 6,
        vertical: true,
        infinite: false,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    draggable: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    draggable: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    draggable: true
                }
            }
        ]
    });
}



function detailsOpen(){
    let btnList = jQuery('.details a');
    let btnclose = jQuery('.btn-menu.open.details-btn');
    btnList.each(function(i){
        let btn = btnList.eq(i);
        btn.click(function(e){
            e.preventDefault();
            let active = jQuery('.price-details.active');
            let id = btn.attr('href');
            let details = jQuery(id);
            if(details.attr('id') !== active.attr('id')){
                active.css({
                    display: 'none'
                });
                active.removeClass('active');
            }
            details.slideToggle();
            details.toggleClass('active');
        });
    });
    btnclose.each(function(i){
        let btn = btnclose.eq(i);
        btn.click(function(){
            let prices = btn.parents('.price-details');
            prices.slideUp();
        });
    });
}

function discount(){
    let btnList = jQuery('a.discount');
    btnList.each(function(i){
        let btn = btnList.eq(i);
        btn.click(function(){
            btn.next('.promo-wrapper').toggleClass('open');
        });
        btn.next('.promo-wrapper').children('.promo-btn').click(function(){
            btn.next('.promo-wrapper').removeClass('open');
        });
    });
}

function happyclients(){
    let number = jQuery('.quantity-clients p span');
    let quantity = parseInt(number.text().replace(/\s/g, ''), 10);
    let i = 1;
    if(i<0){
        i = 1;
    }
    let interval = setInterval(() => {
        for (let j = 0; j < 200; j++) {
            if(i===quantity){
                clearInterval(interval);
                break;
            }
            let str = String(i);
            number.text(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            i++;   
        }
             
    }, 10);
}

function switchMemory(){
    let switchMemory = jQuery('.vs-item-swith');
    if(switchMemory){
        switchMemory.each(function(i){
            if(switchMemory.eq(i).hasClass('disable') && switchMemory.eq(i).parent().hasClass('dos')){
                switchMemory.eq(i).children('a').css({
                    'cursor' : 'default'
                });
            }
            let btns = switchMemory.eq(i).children('a');
            btns.each(function(i){
                let btn = btns.eq(i);
                btn.click(function(e){
                    e.preventDefault();
                    if(btn.hasClass('on') || btn.parents('.vs-item-swith').hasClass('disable')){
                        return;
                    }
                    if(btn.parents('.vs-item').hasClass('disk')){
                        let sw = btn.parents('.virtual-server').children('.dos').children('.vs-item-swith');
                        sw.toggleClass('disable');
                        if(sw.hasClass('disable')){
                            sw.children('a').css({
                                'cursor' : 'default'
                            });
                        }else{
                            sw.children('a').css({
                                'cursor' : 'pointer'
                            });
                        }
                        
                    }
                    btn.addClass('on');
                    btn.prev('a').removeClass('on');
                    btn.next('a').removeClass('on');
                    let idTariffArray = btn.parents('.virtual-server').attr('class').split(' ');
                    let idTariff = parseInt(idTariffArray[1].substr(6), 10);
                    priceValue(idTariff, tariffCustomize(idTariff));        
                });
            });
        });
    }
    
}

function tariffCustomize(idTariff=null){
    let tariff = [
        {
            id:1,
            name: 'LC-1',
            defaultPrice: '2.40',
            variableCPU: [
                {
                    title: '1 ядро Intel Xeon',
                    addPrice: 0
                }
            ],
            variableMemory: [
                {
                    title: '512 Mb',
                    addPrice: 0 
                }
            ],
            variableDiskMemory: [
                {
                    title: '5 GB',
                    addPrice: 0
                }
            ],
            variablePorts: [
                {
                    title: '50 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                }
            ],
            OS: ['Linux'],
            defaultNVMEPrice: '2.60',
            dosDefaultPrice: '6.75'

        },
        {
            id:2,
            name: 'LC-2',
            defaultPrice: '3.26',
            variableCPU: [
                {
                    title: '1 ядро Intel Xeon',
                    addPrice: 0
                }
            ],
            variableMemory: [
                {
                    title: '1024 Mb',
                    addPrice: 0 
                },
                {
                    title: '2048 Mb',
                    addPrice: 0.18 
                }
            ],
            variableDiskMemory: [
                {
                    title: '20 GB',
                    addPrice: 0
                },
                {
                    title: '40 GB',
                    addPrice: 0.92,
                    addPriceNVMe: 1.73,
                }
            ],
            variablePorts: [
                {
                    title: '250 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                },
            ],
            OS: ['Windows','Linux'],
            defaultNVMEPrice: '3.90',
            dosDefaultPrice: '8.38'
        },
        {
            id:3,
            name: 'LC-3',
            defaultPrice: '4.75',
            variableCPU: [
                {
                    title: '2 ядра Intel Xeon',
                    addPrice: 0
                },
                {
                    title: '3 ядра Intel Xeon',
                    addPrice: 0.62
                }
            ],
            variableMemory: [
                {
                    title: '2048 Mb',
                    addPrice: 0 
                },
                {
                    title: '3072 Mb',
                    addPrice: 0.20 
                },
                {
                    title: '4096 Mb',
                    addPrice: 0.40 
                }
            ],
            variableDiskMemory: [
                {
                    title: '20 GB',
                    addPrice: 0
                },
                {
                    title: '40 GB',
                    addPrice: 1.06,
                    addPriceNVMe: 2.00,
                },
                {
                    title: '60 GB',
                    addPrice: 2.12,
                    addPriceNVMe: 4.00
                }
            ],
            variablePorts: [
                {
                    title: '250 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                }
            ],
            OS: ['Windows','Linux'],
            defaultNVMEPrice: '5.85',
            dosDefaultPrice: '9.99'
        },
        {
            id:4,
            name: 'LC-4',
            defaultPrice: '7.15',
            variableCPU: [
                {
                    title: '3 ядра Intel Xeon',
                    addPrice: 0
                },
                {
                    title: '4 ядра Intel Xeon',
                    addPrice: 0.61
                }
            ],
            variableMemory: [
                {
                    title: '4096 Mb',
                    addPrice: 0 
                },
                {
                    title: '6144 Mb',
                    addPrice: 0.39 
                },
                {
                    title: '8192 Mb',
                    addPrice: 0.78 
                }
            ],
            variableDiskMemory: [
                {
                    title: '40 GB',
                    addPrice: 0
                },
                {
                    title: '60 GB',
                    addPrice: 1.05,
                    addPriceNVMe: 1.96,
                },
                {
                    title: '80 GB',
                    addPrice: 2.10,
                    addPriceNVMe: 3.92
                },
                {
                    title: '100 GB',
                    addPrice: 3.15,
                    addPriceNVMe: 5.89
                }
            ],
            variablePorts: [
                {
                    title: '250 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                }
            ],
            OS: ['Windows','Linux'],
            defaultNVMEPrice: '8.55',
            dosDefaultPrice: '13.45'
        },
        {
            id:5,
            name: 'LC-5',
            defaultPrice: '11.86',
            variableCPU: [
                {
                    title: '4 ядра Intel Xeon',
                    addPrice: 0
                },
                {
                    title: '5 ядер Intel Xeon',
                    addPrice: 0.72
                }
            ],
            variableMemory: [
                {
                    title: '8192 Mb',
                    addPrice: 0 
                },
                {
                    title: '12 288 Mb',
                    addPrice: 0.93 
                },
                {
                    title: '16 384 Mb',
                    addPrice: 1.86 
                }
            ],
            variableDiskMemory: [
                {
                    title: '60 GB',
                    addPrice: 0
                },
                {
                    title: '80 GB',
                    addPrice: 1.24,
                    addPriceNVMe: 2.32,
                },
                {
                    title: '100 GB',
                    addPrice: 2.48,
                    addPriceNVMe: 4.64
                },
                {
                    title: '120 GB',
                    addPrice: 3.71,
                    addPriceNVMe: 6.97
                }
            ],
            variablePorts: [
                {
                    title: '250 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                }
            ],
            OS: ['Windows','Linux'],
            defaultNVMEPrice: '15.7',
            dosDefaultPrice: '19.86'
        },
        {
            id:6,
            name: 'LC-6',
            defaultPrice: '17.80',
            variableCPU: [
                {
                    title: '6 ядер Intel Xeon',
                    addPrice: 0
                }
            ],
            variableMemory: [
                {
                    title: '16 384 Mb',
                    addPrice: 0 
                },
                {
                    title: '24 576 Mb',
                    addPrice: 1.92 
                },
                {
                    title: '32 768 Mb',
                    addPrice: 3.84 
                }
            ],
            variableDiskMemory: [
                {
                    title: '80 GB',
                    addPrice: 0
                },
                {
                    title: '100 GB',
                    addPrice: 1.28,
                    addPriceNVMe: 2.4,
                },
                {
                    title: '120 GB',
                    addPrice: 2.55,
                    addPriceNVMe: 4.79
                },
                {
                    title: '140 GB',
                    addPrice: 3.83,
                    addPriceNVMe: 7.19
                },
                {
                    title: '160 GB',
                    addPrice: 5.11,
                    addPriceNVMe: 9.58
                },
                {
                    title: '180 GB',
                    addPrice: 6.39,
                    addPriceNVMe: 11.98
                },
                {
                    title: '200 GB',
                    addPrice: 7.66,
                    addPriceNVMe: 14.37
                }
            ],
            variablePorts: [
                {
                    title: '250 Mbps',
                    addPrice:0
                }
            ],
            variableCart: [
                {
                    title: '1 месяц',
                    procentPromo: 0,
                    items:1
                },
                {
                    title: '3 месяця',
                    procentPromo: 3,
                    items: 3
                },
                {
                    title: '6 месяцев',
                    procentPromo: 5,
                    items:6
                },
                {
                    title: '12 месяцев',
                    procentPromo: 10,
                    items:12
                }
            ],
            OS: ['Windows','Linux'],
            defaultNVMEPrice: '23.10',
            dosDefaultPrice: '27.26'
        }
    ];
    if(idTariff){
        for(let i=0;i<tariff.length;i++){
            if(tariff[i].id===idTariff){
                return tariff[i];
            }
        }
    }
    for(let i=0;i<tariff.length;i++){
        let id = tariff[i].id;
        let name =tariff[i].name;
        let price = tariff[i].defaultPrice;
        let cpu = tariff[i].variableCPU;
        let memory = tariff[i].variableMemory;
        let diskMemory = tariff[i].variableDiskMemory;
        let port = tariff[i].variablePorts;
        let cart = tariff[i].variableCart;
        let OS = tariff[i].OS;
        let vs = jQuery('.virtual-server');
        vs.each(function(i){
            let strClass = 'js-id-'+id;
            if(vs.eq(i).hasClass(strClass)){
                let vsItem = vs.eq(i);
                let vsTitle = vsItem.find('.vs-title h3');
                vsTitle.html('VDS/VPS «'+name+'»');
                let arrayPrice = price.split('.');
                let vsDollar = vsItem.find('.vs-price-inner .top .number p');
                let vsCent = vsItem.find('.vs-price-inner .top .cent p');
                vsDollar.html(arrayPrice[0]);
                vsCent.html('.'+arrayPrice[1]);
                let vsCPU = vsItem.find('.vs-item.cpu .vs-item-text p .text');
                vsCPU.html(cpu[0].title);
                if(cpu.length > 1){
                    vsCPU.parent().find('.arrow').addClass('view');
                }
                let vsMemory = vsItem.find('.vs-item.memory .vs-item-text p .text');
                vsMemory.html(memory[0].title);
                if(memory.length > 1){
                    vsMemory.parent().find('.arrow').addClass('view');
                }
                let vsMemoryDisk = vsItem.find('.vs-item.disk .vs-item-text p .text');
                vsMemoryDisk.html(diskMemory[0].title);
                if(diskMemory.length > 1){
                    vsMemoryDisk.parent().find('.arrow').addClass('view');
                }
                let vsPort = vsItem.find('.vs-item.port .vs-item-text p .text');
                vsPort.html(port[0].title);
                if(port.length > 1){
                    vsPort.parent().find('.arrow').addClass('view');
                }
                let vsTerm = vsItem.find('.vs-item.term .vs-item-text p .text');
                vsTerm.html(cart[0].title);
                if(cart.length > 1){
                    vsTerm.parent().find('.arrow').addClass('view');
                }
                let vsOS = vsItem.find('.vs-item.os .vs-item-text p');
                vsOS.html(OS.join(', '));
            }
        });
    }

    let arrows = jQuery('.vs-item .arrow');
    arrows.each(function(i){
        let arrow = arrows.eq(i);
        if(arrow.hasClass('view')){
            arrow.click(function(){
                let vs = arrow.parents('.virtual-server');
                let classes = vs.attr('class').split(' ');
                let id = parseInt(classes[1].substr(6), 10);
                let type = arrow.parents('.vs-item');
                for(let i=0;i<tariff.length;i++){
                    let currentTariff;
                    if(tariff[i].id === id){
                        currentTariff = tariff[i];
                        let variants;
                        if(type.hasClass('cpu')){
                            variants = currentTariff.variableCPU;
                        }else if(type.hasClass('memory')){
                            variants = currentTariff.variableMemory;
                        }else if(type.hasClass('disk')){
                            variants = currentTariff.variableDiskMemory;
                        }else if(type.hasClass('port')){
                            variants = currentTariff.variablePorts;
                        }else if(type.hasClass('term')){
                            variants = currentTariff.variableCart;
                        }
                        
                        if(arrow.hasClass('left')){
                            let index;
                            for(let y=0;y < variants.length;y++){
                                if(variants[y].title === arrow.next('.text').text()){
                                    index = y;
                                }
                            }
                            if(index > 0){
                                arrow.next('.text').text(variants[index-1].title);
                            }
                            priceValue(id,currentTariff);
                        }
                        if(arrow.hasClass('right')){
                            let index;
                            for(let y=0;y < variants.length;y++){
                                if(variants[y].title === arrow.prev('.text').text()){
                                    index = y;
                                }
                            }
                            if(index < variants.length-1){
                                arrow.prev('.text').text(variants[index+1].title);
                            }
                            priceValue(id,currentTariff);
                        }
                    }
                }
            });
        }
    });
}

function priceValue(id, tariff){
    let str = '.js-id-'+id;
    let vs = jQuery(str);
    let disk = vs.find('.disk .vs-item-swith .on').text();
    let dos = vs.find('.dos .vs-item-swith');
    let price;
    if(disk === 'SSD' && dos.hasClass('disable')){
        price = parseFloat(tariff.defaultPrice, 10);
    }else if(disk === 'NVMe' && dos.children('.on').text()==='Нет' ){
        price = parseFloat(tariff.defaultNVMEPrice, 10);
    }else if(disk === 'NVMe' && dos.children('.on').text()==='Да'){
        price = parseFloat(tariff.dosDefaultPrice, 10);
    }
    let vsCPUValue = vs.find('.cpu .text').text();
    let cpuArray = tariff.variableCPU;
    for(let i=0;i<cpuArray.length;i++){
        if(cpuArray[i].title === vsCPUValue){
            price += cpuArray[i].addPrice;
        }
    }
    let vsMemoryValue = vs.find('.memory .text').text();
    let memoryArray = tariff.variableMemory;
    for(let i=0;i<memoryArray.length;i++){
        if(memoryArray[i].title === vsMemoryValue){
            price += memoryArray[i].addPrice;
            
        }
    }
    let vsDiskMemoryValue = vs.find('.disk .text').text();
    let diskMemoryArray = tariff.variableDiskMemory;
    for(let i=0;i<diskMemoryArray.length;i++){
        if(diskMemoryArray[i].title === vsDiskMemoryValue){
            if(disk === 'NVMe' && typeof diskMemoryArray[i]['addPriceNVMe']!== "undefined"){
                price += diskMemoryArray[i].addPriceNVMe;
            }else{
                price += diskMemoryArray[i].addPrice;
            }
        }
    }
    let vsPortValue = vs.find('.port .text').text();
    let portsArray = tariff.variablePorts;
    for(let i=0;i<portsArray.length;i++){
        if(portsArray[i].title === vsPortValue){
            price += portsArray[i].addPrice;
        }
    }
    let vsTermValue = vs.find('.term .text').text();
    let termArray = tariff.variableCart;
    for(let i=0;i<termArray.length;i++){
        if(termArray[i].title === vsTermValue){
            let items = termArray[i].items;
            let procentPromo = termArray[i].procentPromo;
            let pr = vs.find('.vs-price-inner .bottom p:first-of-type');
            if(items === 1){
                pr.removeClass('view');
                break;
            }
            pr.text('Скидка '+termArray[i].procentPromo+' %');
            pr.addClass('view');
            price = price * items;
            price = price - (price/100*procentPromo);
        }
    }
    price *=100;
    price = Math.ceil(price);
    price /=100;
    price +='.00'; 
    let priceArray = price.split('.');
    priceArray[1] = priceArray[1].substr(0,2);
    if(priceArray[1].length<2){
        priceArray[1]+='0';
    }
    let vsNumber = vs.find('.vs-price-inner .number p');
    vsNumber.text(priceArray[0]);
    let vsCent = vs.find('.vs-price-inner .cent p');
    vsCent.text('.'+priceArray[1]);
}

function hoverDos(){
    let items = jQuery('.vs-item.dos .vs-item-swith');
    items.each(function(i){
        let item = items.eq(i);
        let info1 = item.find('.hover-info-1');
        let info2 = item.find('.hover-info-2');
        item.hover(function(){
            if(items.eq(i).hasClass('disable')){
                info1.addClass('view');
            }else{
                info2.addClass('view');
            }
        },function(){
            if(items.eq(i).hasClass('disable')){
                info1.removeClass('view');
            }else{
                info2.removeClass('view');
            }
        });
    });
}

function dosHoverOut(){
    let hoverInfo1 = jQuery('.hover-info-1');
    let hoverInfo2 = jQuery('.hover-info-2');
    hoverInfo1.each(function(i){
        hoverInfo1.eq(i).click(function(){
            hoverInfo1.eq(i).removeClass('view');
        });
    });
    hoverInfo2.each(function(i){
        hoverInfo2.eq(i).click(function(){
            hoverInfo2.eq(i).removeClass('view');
        });
    });
}
jQuery(document).ready(function(){
    languageSelect();
    //subMenuOpen();
    homeTopSlider();
    advantagesSlider();
    reviewsSlider();
    topMenuHover();
    dataSlider();
    pricesSlider();
    mobileMenuOpen();
    dedicatedSlider();
    detailsOpen();
    discount();
    switchMemory();
    tariffCustomize();  
    mobileLanguageSwitch();
    hoverDos();
    dosHoverOut();
    window.happyclientsSection = jQuery('.happyclients');
    if(window.happyclientsSection){
        window.headerHeight = jQuery('.top-nav-wrapper').innerHeight() + jQuery('.header-middle').innerHeight() + jQuery('.navbar').innerHeight();
        window.mainHeight = jQuery('main').innerHeight();
        window.positionHappy = Math.round(window.headerHeight+window.mainHeight - (window.happyclientsSection.innerHeight()/2)); 
    }
});

jQuery(document).scroll(function(){
    let scroll = pageYOffset + jQuery(window).innerHeight();
    
    if(scroll > window.positionHappy){
        happyclients();
        happyclients = function (){};
        scroll = null;
    }

});




