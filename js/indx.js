/*
 * @Description: 
 * @Author: zhangkai35
 * @Date: 2022-06-07 17:48:20
 */
let ul,li,lunbo;
lunbo = $('div.lunbo')[0];
ul = $('ul.lbul')[0];
li = $('ul.lbul li');
ul.appendChild(li[0].cloneNode(true));
li = $('ul.lbul li');
let timer = null;
timer = setInterval(autoplay,3000);
let key = 0;
function autoplay(){
    key++;
    if(key > li.length - 1){
        leader = 0;
        key = 1;
    }
    animate(ul,-key*li[0].offsetWidth);

}
let leader = 0;
function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        leader = leader + (target - leader) / 20;
        obj.style.left = leader + "px"; 
    },10);

}
ul.onmouseover = function(){
    clearInterval(timer);
}
ul.onmouseout = function(){
   timer = setInterval(autoplay,3000);  
}
let lef = $('#lef');
let rit =$('#rit');
lef.click(function(){
    let n = 1;
    key++;
    if(key > li.length - 1){
    leader = 0;
    key = 1;
    }
    animate(ul,-key*li[0].offsetWidth);
})
rit.click(function(){
    clearInterval(timer);   
    key--;
    if(key < 0){
        leader = -(li.length - 1) * li[0].offsetWidth;
        key = li.length - 2;
    }
    animate(ul,-key*li[0].offsetWidth);
})
let hs = $('input.hs');
let sousuo = $('div.sousuo');
let maxdiv = $('div.max-div');
let footbox = $('div.foot-box');
let lb =$('div.lunbo');
hs.click(function(){
    sousuo.animate({
        zIndex: 4
    },50);
    maxdiv.hide();
    footbox.hide();
    lb.hide();
});
$('#cha').click(function(){
    sousuo.animate({
        zIndex: -1
    },10);
    maxdiv.show();
    footbox.show();
    lb.show();
});
$('.cb').mouseleave(function(){
    $('.rmtc').fadeOut(100)
});
$('.cb ul li').mouseleave(function(){
    $('.rm').fadeIn(100)
});
$('.cb ul').mouseenter(function(){
    $('.rmtc').fadeIn(100)
});




