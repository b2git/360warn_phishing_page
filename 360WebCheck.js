var s1 = document.createElement('script');
s1.setAttribute('type','text/javascript');
s1.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js');
s1.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js');

var head = document.getElementsByTagName('head')[0];
head.appendChild(s1);
s1.onload = function(){
    var s2 = document.createElement('script');
    s2.setAttribute('type','text/javascript');
    s2.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/layer/3.1.1/layer.js');
    head.appendChild(s2);
}
var s3 = document.createElement('link');
s3.setAttribute('type','text/css');
s3.setAttribute('rel','stylesheet');
s3.setAttribute('href','//cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css');
head.appendChild(s3);
var url = "http://127.0.0.1/360safewarning.html";
var content = "";

fetch(url).then(function(response) {
    return response.text();
}).then(function(html) {
    content = html;
}).catch(function(err) {
    console.warn('Something went wrong.', err);
});
window.onload = function(){
    $(".layui-layer").css("background", "none");
    layer.open({
        type: 1,
        move: false ,
        area: ['868px', '360px'],
        title: false,
        shade: 0,
        closeBtn: 1,
        anim: 0,
        offset: '100px',
        scrollbar: false,
        content: content
    });
}

window.addEventListener('load', function() {
    var link = document.querySelector('a.layui-layer-ico.layui-layer-close.layui-layer-close2');

    // 隐藏a标签
    link.style.display = 'none';

    // 5秒后重新显示a标签
    setTimeout(function() {
        link.style.display = '';
    }, 5000);
});
  