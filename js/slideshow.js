$(document).ready(function() {

    //广告图轮播，jquery写法
    var container2 = $('.banner_big');
    var list = $('.banner_big .imgBox');
    var buttons = $('.imgNumber a');
    var prev = $('#prev');
    var next = $('#next');
    var currentIndex = 1;
    var len = 5;
    var interval = 3000;
    var timer;

    function move(offset) {
        //offset偏移量
        var newLeft = parseInt(list.css('left')) + offset; //先获取移动后的距离，好做判断
        if (offset>0) {
            offset = '+=' + offset;  //向右移
        }
        else {
            offset = '-=' + Math.abs(offset); //向左移
        }
        list.animate({'left': offset}, 300, function () {
            if(newLeft > 0){
                list.css('left', -810 * (len-1));
            }
            if(newLeft < (-810 * (len-1))) {
                list.css('left', 0);
            }
        });
    }
    function showButton() {
        buttons.eq(currentIndex-1).addClass('active').siblings().removeClass('active');
    }
    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }
    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (currentIndex == 5) {
            currentIndex = 1;
        }
        else {
            currentIndex += 1;
        }
        move(-810);
        showButton();
    });

    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (currentIndex == 1) {
            currentIndex = 5;
        }
        else {
            currentIndex -= 1;
        }
        move(810);
        showButton();
    });
    buttons.each(function () {
        $(this).bind('click', function () {
            if (list.is(':animated') || $(this).attr('class')=='active') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -810 * (myIndex - currentIndex);
            move(offset);
            currentIndex = myIndex;
            showButton();
        })
    });
    container2.hover(stop, play);
    play();

    //页面的一些切换效果
    $('.category_item').hover(function () {
        $(this).addClass('category_active').siblings().removeClass('category_active');
        $('.category_list').show();
    },(function (e) {
        var b=$('.category_list')[0];
        if(e.relatedTarget==b ||e.toElement== b)
            return;
        else
            $('.category_list').hide();
    }));

    $('.category_list').mouseleave(function () {
        $(this).hide();
    });

})

































