$(function(){
    //搜索
    $('.box1 .search').on('touchstart',function(){
        $('.search-box').addClass('active');
    })
    $('.close').on('touchstart',function(){
        $('.search-box').removeClass('active');
        $('.searching').val('')
    })

    $('.hq span').on('touchstart',function(){
        var text=$(this).text();
        // alert(1)
        $('.searching').val(text)
    })
    //banner
    var sw=new Swiper('#banner',{
        direction:'horizontal',
        loop: true,
        autoplay : 2000,
        // 分页器
        pagination: '.swiper-pagination',
    })
    var sw1=new Swiper('#contain',{
        direction:'vertical',
        loop: true,
        autoplay : 2000,
        height:40
    })
    //main
    var sw2=new Swiper('#main',{
        direction:'horizontal',
        width : 176
    });
    var w=null;
    $('#main').on('touchstart',function(e){
        w=e.originalEvent.changedTouches[0].pageX;
    });
    $('#main').on('touchmove',function(e){
        n=e.originalEvent.changedTouches[0].pageX;
        if(w-n>50){
            $('.mallPage').addClass('active')
        }

    })

    $('.header .more').on('touchstart',function(){
        $('.global-nav').toggleClass('active')
    });
    $('.shouye').on('touchstart',function(){
        $('.global-nav').removeClass('active');
        $('.mallPage').removeClass('active')
    })
    //热点
    var sw=new Swiper('#hot',{
        direction:'horizontal',
        loop: true,
        autoplay : 2000,
        // 分页器
        pagination: '.swiper-pagination',
    })
    $(window).on('scroll',function(){
        var stop=$(window).scrollTop();
        if(stop>60){
          $('.box1').addClass('active')
        }else{
            $('.box1').removeClass('active')
        }
    })
    //菜单分类显示于隐藏
    $('.category-menu').on('touchstart',function(){
        $('.nav-tab').addClass('active')
    })
    $('.nav-tab .back').on('touchstart',function(){
        $('.nav-tab').removeClass('active')
    })
    //滑动隐藏
    var tab=$('.tab-box');
    var left=null;
    tab.on('touchstart',function(e){
        left=e.originalEvent.changedTouches[0].pageX;
    });

    tab.on('touchend','li',function(e){
        n=e.originalEvent.changedTouches[0].pageX;
        if(left-n>40){
            $('.nav-tab').removeClass('active')
        }
    });
})