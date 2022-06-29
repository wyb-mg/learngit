/*
 * @Description: 
 * @Author: zhangkai35
 * @Date: 2022-06-21 09:28:26
 */
//大轮播----------
let dlunbo = $('div.dlunbo')[0];
let lb = $('div.lb')[0];
let allpictures= $('div.lb>div');
let timer = null;
timer = setInterval(autoplay,4000);
let key = 0;
function autoplay(){
    key++;
    if(key > allpictures.length - 1){
        leader = 0;
        key = 1;
    }
    animate(lb,-key*allpictures[0].offsetWidth);
}
let leader = 0;
function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        leader = leader + (target - leader) / 5;
        obj.style.left = leader + "px";
    },10);

}
lb.onmouseover = function(){
    clearInterval(timer);
}
lb.onmouseout = function(){
    timer = setInterval(autoplay,1000);
}
//小轮播----------
let tp = $('div.tp')[0];
let alltupian = $('div.tp>div');
let time = null;
time = setInterval(autoplay,1000);
let index = 0;
function autoplay(){
    index++;
    if(index > alltupian.length - 1){
        leade = 0;
        index = 1;
    }
    animate(tp);
}
let leade = 0;
function animate(obj){
    clearInterval(obj.time);
    obj.time = setInterval(function(){
        leade--;
        obj.style.left = leade + "px";
    },10);
}
tp.onmouseover = function(){
    console.log('thsuahfkahgvip')
    clearInterval(setInterval(autoplay,1000));
}
tp.onmouseout = function(){
    time = setInterval(autoplay,1000);
}
//透明度切换轮播图------------
let allimg = $('.fadk').children();
let step = 0;
let len = allimg.length;
let tim = null;
tim = setInterval(touming,3000);
function touming(){
    if(step > len - 1){
        step = -1;
    }
    allimg.eq(step).animate({
        opacity:0
    },4000);
    step++;
    allimg.eq(step).animate({
        opacity:1
    },2000);
}
//企业客户专属定制------------
$(function(){
    let zsnb = $('div.zsnb>div');
    let zsdzo = $('div.zsdz').children().eq(0);
    let zsdzt = $('div.zsdz').children().eq(1)
    function customized(){
            zsnb.animate({
                top:'0px',
            },2000);
             zsdzo.animate({
                 top:'0px'
             },1000);
             zsdzt.animate({
                top:'0px'
            },1000);
    };
    let a,b,c;
    a = $(window).height();
    let one = $('.zsdz');
    $(window).scroll(function(){
        b = $(this).scrollTop(); 
        c = one -300;
        if(b > c){
            customized();
        }
    });
})
//top级专业开发能力------
$(function(){
    let tm = $('div.topmajor');
    let img1 = $('.topmajor').children(":first").children(":first");
    let img2 = $('.topmajor').children(":first").children(":last");
    let zi = $('.topmajor').children().eq(1);
    let shou = $('.topmajor').children().eq(2);
    function topdevelopment(){
        img1.animate({
            opacity:'1'
        },2000);
        img2.animate({
            marginLeft: '420px'
        },2000);
        zi.animate({
            marginTop: '240px'
        },2000);
        shou.animate({
            marginLeft: '1183px'
        },2000);
    };
    let fangan = $('.fangan');
    let d1 = $('.fangan').children().eq(0);
    let d2 = $('.fangan').children().eq(1);
    function solution(){
            d1.animate({
                top:'0px'
            },4500);
            d2.animate({
                top:'20px'
            },4500); 
        };
    let a,b,c;
    a = $(window).height();
    let one = $('.ckgd');
    $(window).scroll(function(){
        b = $(this).scrollTop(); 
        c = one.offset().top-300;
        if(b > c){
            topdevelopment();
            solution();
        }
    });
});
//oppo企业业务优势------
$(function(){
    let zi = $('.oppo-advantage').children().eq(0);
    let advantage = $('.oppo-advantage').children().eq(1);
    let situ = advantage.children();
    function  oppoAdvantage(){
        situ.animate({
            paddingLeft: '0px'
            },1500);
            zi.animate({
            top:'0px' 
            },1500);
        };
    let a,b,c;
    a = $(window).height();
    let one = $('.oppo-advantage');
    $(window).scroll(function(){
        b = $(this).scrollTop(); 
        c = one.offset().top-300;
        if(b > c){
            oppoAdvantage();
        }
    });
});
//oppo新闻与活动------
$(function(){
    let news = $('.news-events');
    function opponews(){
        news.animate({
        paddingTop: '100px'
        },2000);
    };
    let a,b,c;
    a = $(window).height();
    let one = $('.news-events');
    $(window).scroll(function(){
        b = $(this).scrollTop(); 
        c = one.offset().top-300;
        if(b > c){
            opponews();
        }
    });
})
//合作共赢共创未来------
$(function(){
    let cooperation = $('.cooperation');
    let tupian = $('.cooperation').children().eq(2);
    function oppocooperation(){
        cooperation.animate({
        paddingTop: '125px'
        },2000);
        tupian.animate({
            marginTop:'80px'
        },2000);
    };
    let a,b,c;
    a = $(window).height();
    let one = $('.cooperation');
    $(window).scroll(function(){
        b = $(this).scrollTop(); 
        c = one.offset().top-300;
        if(b > c){
            oppocooperation();
        }
    });
});