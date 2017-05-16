window.onload=function () {
    //js写法 放大镜
    var container = document.getElementById("container");
    var smallBox = document.getElementById("small_box");
    var floatBox = document.getElementById("float_box");
    var bigBox = document.getElementById("big_box");
    var bigBoxImage = document.getElementById("bigImg");

    smallBox.onmouseover =function () {
        floatBox.style.display="block";
        bigBox.style.display="block";
    }
    smallBox.onmouseout =function () {
        floatBox.style.display="none";
        bigBox.style.display="none";
    }

    smallBox.onmousemove = function (e) {
        var event = e||window.event;
        var left = event.clientX - container.offsetLeft - smallBox.offsetLeft - floatBox.offsetWidth/2;
        var top = event.clientY - container.offsetTop - smallBox.offsetTop - floatBox.offsetHeight/2;
        if(left<0)
        {
            left=0;
        }
        else if(left > smallBox.offsetWidth- floatBox.offsetWidth)
        {
            left = smallBox.offsetWidth- floatBox.offsetWidth;

        }
        if(top<0)
        {
            top=0;
        }
        else if(top > smallBox.offsetHeight- floatBox.offsetHeight)
        {
            top = smallBox.offsetHeight- floatBox.offsetHeight;

        }
        floatBox.style.left = left + "px";
        floatBox.style.top = top + "px";
        bigBoxImage.style.left = -left * (bigBoxImage.offsetWidth/smallBox.offsetWidth) +"px";
        bigBoxImage.style.top = -top * (bigBoxImage.offsetHeight/smallBox.offsetHeight) +"px";
    }
}
