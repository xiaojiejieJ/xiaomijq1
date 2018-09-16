/*
* @Author: Dell
* @Date:   2018-09-13 16:36:57
* @Last Modified by:   nanjiao
* @Last Modified time: 2018-09-16 17:05:58
*/
//页面加载
window.onload=function(){
	
// 侧导航
  let lis=$(".slip .menu .box");
  let aside=$(".menu .box .children");

  // console.log(lis,aside);
  // 隐式循环
  lis.mouseenter(function(){
  	$(".children").css("display","none");
  	$(this).children(".children").css("display","block");
  })
  lis.mouseleave(function(){
  	$(this).children(".children").css("display","none");

  })
  // 小米闪购平移效果
    let buttom1=$(".xiaomishangou .jt .zuo");
    let milist1=$(".neirong .lists");
    // console.log(buttom1,milist1);
    let w1=milist1.width()/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
    buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
  // 商品选项卡
 //  let parent=$(".box-pj .top .lis1 a");
 //  let son=$(".box-pj .list");
 //  console.log(parent,son);
 //  parent.mouseenter(function(){
 //  	let i=$(this).index();
 //  	// 链式调用
 //  	son.css("display","none").eq(i).css("display","block");

 // parent.triggerHandler("mouseenter");
 //  })
 
let jdfu = document.querySelectorAll(".household .top .house");
    let jdson = document.querySelectorAll(".household .bdd ");
    console.log(jdfu, jdson);
    for (let i = 0; i < jdfu.length; i++) {
        jdfu[i].onmouseenter = function () {
            for (let j = 0; j < jdson.length; j++) {
                jdson[j].style.display = "none";
            }
            jdson[i].style.display = "block";
        }
    }
// 平移效果
    let button=$(".tuijian .box-tj .top .jt .zuo ");
    let milist=$(".tuijian .box-tj .list");
    let w=milist.width()/2;
    let times=0;
    button[0].onclick=function(){
             times++;
            if (times==2) {
                times=1;
            }
            milist.css("transform",`translate(${(-w*times)}px)`);
        }
    button[1].onclick=function(){
        times--;
        if (times==-1) {
            times=0;
        }
        milist.css("transform",`translate(${(-w*times)}px)`);
        }
  // 轮播图
  let imgs=$(".slip .banner img");
  let dots=$(".dot li");
   let leftbtn=$(".leftArrow");
    let rightbtn=$(".rightArrow");
     let banner=$(".banner");
    // console.log(imgs,dots,banner,leftbtn,rightbtn);
    let now=0;
    imgs.first().css({"z-index":"10"});
    dots.first().addClass('active');
    let t=setInterval(move, 2000);
    function move(){
        now++;
        if (now==imgs.length) {
            now=0;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    function moveL(){
        now--;
        if (now==-1) {
            now=imgs.length-1;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    rightbtn.click(function() {
        move();
    });

    leftbtn.click(function() {
        moveL();
    });
    banner.mouseenter(function () {
         clearInterval(t);
     })
    banner.mouseleave(function () {
         t=setInterval(move,2000);
    })
    dots.click(function(){
        let i=$(this).index();
        dots.removeClass('active').eq(i).addClass('active');
        imgs.css("z-index","5").eq(i).css("z-index","10");
    })
// 图书轮播
        // 内容轮播1
    let oneimgs = document.querySelectorAll(".content .content-list .one .banner .master");
    let onedots = document.querySelectorAll(".content .content-list .one .dot li");
    let oneleftbtn=document.querySelectorAll(".content .content-list .one .leftbtn")[0];
    let onerightbtn=document.querySelectorAll(".content .content-list .one .rightbtn")[0];
    let onewidths = parseInt(getComputedStyle(oneimgs[0], null).width);
    let onenow = 0;
    let onenext = 0;
    let oneflag=true;
    for (let i = 0; i < onedots.length; i++) {
        onedots[i].onclick = function () {
            for (let j = 0; j < onedots.length; j++) {
                onedots[j].classList.remove("active");
                oneimgs[j].style.left = onewidths + "px";
            }
            onedots[i].classList.add("active");
            oneimgs[i].style.left = "0";
            onenow = onenext;
        }
    }
    oneimgs[0].style.left="0";
    onedots[0].classList.add("active");
    function onemove() {
        onenext++;
        if (onenext==onedots.length){
            onenext=0;
        }
        oneimgs[onenext].style.left=onewidths+"px";
        animate(oneimgs[onenow],{left:-onewidths});
        animate(oneimgs[onenext],{left:0},function () {
            oneflag=true;
        });
        onedots[onenow].classList.remove("active");
        onedots[onenext].classList.add(("active"));
        onenow=onenext;
    }
    onerightbtn.onclick=function(){
        if (!oneflag){
            return;
        }
        oneflag=false;
        onemove();
    }
    function onemoveL(){
        onenext--;
        if (onenext<0){
            onenext=onedots.length-1;
        }
        oneimgs[onenext].style.left=-onewidths+"px";
        animate(oneimgs[onenow],{left:onewidths});
        animate(oneimgs[onenext],{left:0},function () {
            oneflag=true;
        });
        onedots[onenow].classList.remove("active");
        onedots[onenext].classList.add(("active"));
        onenow=onenext;
    }
    oneleftbtn.onclick=function(){
        if (!oneflag){
            return;
        }
        oneflag=false;
        onemoveL();
    }


    // 内容轮播2
    let senimgs = document.querySelectorAll(".content .content-list .sen .banner .master");
    let sendots = document.querySelectorAll(".content .content-list .sen .dot li");
    let senleftbtn=document.querySelectorAll(".content .content-list .sen .leftbtn")[0];
    let senrightbtn=document.querySelectorAll(".content .content-list .sen .rightbtn")[0];
    let senwidths = parseInt(getComputedStyle(senimgs[0], null).width);
    let sennow = 0;
    let sennext = 0;
    let senflag=true;
    for (let i = 0; i < sendots.length; i++) {
        sendots[i].onclick = function () {
            for (let j = 0; j < sendots.length; j++) {
                sendots[j].classList.remove("active");
                senimgs[j].style.left = senwidths + "px";
            }
            sendots[i].classList.add("active");
            senimgs[i].style.left = "0";
            sennow = sennext;
        }
    }
    senimgs[0].style.left="0";
    sendots[0].classList.add("active");
    function senmove() {
        sennext++;
        if (sennext==sendots.length){
            sennext=0;
        }
        senimgs[sennext].style.left=senwidths+"px";
        animate(senimgs[sennow],{left:-senwidths});
        animate(senimgs[sennext],{left:0},function () {
            senflag=true;
        });
        sendots[sennow].classList.remove("active");
        sendots[sennext].classList.add(("active"));
        sennow=sennext;
    }
    senrightbtn.onclick=function(){
        if (!senflag){
            return;
        }
        senflag=false;
        senmove();
    }
    function senmoveL(){
        sennext--;
        if (sennext<0){
            sennext=sendots.length-1;
        }
        senimgs[sennext].style.left=-senwidths+"px";
        animate(senimgs[sennow],{left:senwidths});
        animate(senimgs[sennext],{left:0},function () {
            senflag=true;
        });
        sendots[sennow].classList.remove("active");
        sendots[sennext].classList.add(("active"));
        sennow=sennext;
    }
    senleftbtn.onclick=function(){
        if (!senflag){
            return;
        }
        senflag=false;
        senmoveL();
    }



    let sanimgs = document.querySelectorAll(".content .content-list .san .banner .master");
    let sandots = document.querySelectorAll(".content .content-list .san .dot li");
    let sanleftbtn=document.querySelectorAll(".content .content-list .san .leftbtn")[0];
    let sanrightbtn=document.querySelectorAll(".content .content-list .san .rightbtn")[0];
    let sanwidths = parseInt(getComputedStyle(sanimgs[0], null).width);
    let sannow = 0;
    let sannext = 0;
    let sanflag=true;
    for (let i = 0; i < sandots.length; i++) {
        sandots[i].onclick = function () {
            for (let j = 0; j < sandots.length; j++) {
                sandots[j].classList.remove("active");
                sanimgs[j].style.left = sanwidths + "px";
            }
            sandots[i].classList.add("active");
            sanimgs[i].style.left = "0";
            sannow = sannext;
        }
    }
    sanimgs[0].style.left="0";
    sandots[0].classList.add("active");
    function sanmove() {
        sannext++;
        if (sannext==sandots.length){
            sannext=0;
        }
        sanimgs[sannext].style.left=sanwidths+"px";
        animate(sanimgs[sannow],{left:-sanwidths});
        animate(sanimgs[sannext],{left:0},function () {
            sanflag=true;
        });
        sandots[sannow].classList.remove("active");
        sandots[sannext].classList.add(("active"));
        sannow=sannext;
    }
    sanrightbtn.onclick=function(){
        if (!sanflag){
            return;
        }
        sanflag=false;
        sanmove();
    }
    function sanmoveL(){
        sannext--;
        if (sannext<0){
            sannext=sandots.length-1;
        }
        sanimgs[sannext].style.left=-sanwidths+"px";
        animate(sanimgs[sannow],{left:sanwidths});
        animate(sanimgs[sannext],{left:0},function () {
            sanflag=true;
        });
        sandots[sannow].classList.remove("active");
        sandots[sannext].classList.add(("active"));
        sannow=sannext;
    }
    sanleftbtn.onclick=function(){
        if (!sanflag){
            return;
        }
        sanflag=false;
        sanmoveL();
    }


    // 内容轮播4
    let forimgs = document.querySelectorAll(".content .content-list .for .banner .master");
    let fordots = document.querySelectorAll(".content .content-list .for .dot li");
    let forleftbtn=document.querySelectorAll(".content .content-list .for .leftbtn")[0];
    let forrightbtn=document.querySelectorAll(".content .content-list .for .rightbtn")[0];
    let forwidths = parseInt(getComputedStyle(forimgs[0], null).width);
    let fornow = 0;
    let fornext = 0;
    let forflag=true;
    for (let i = 0; i < fordots.length; i++) {
        fordots[i].onclick = function () {
            for (let j = 0; j < fordots.length; j++) {
                fordots[j].classList.remove("active");
                forimgs[j].style.left = forwidths + "px";
            }
            fordots[i].classList.add("active");
            forimgs[i].style.left = "0";
            fornow = fornext;
        }
    }
    forimgs[0].style.left="0";
    fordots[0].classList.add("active");
    function formove() {
        fornext++;
        if (fornext==fordots.length){
            fornext=0;
        }
        forimgs[fornext].style.left=forwidths+"px";
        animate(forimgs[fornow],{left:-forwidths});
        animate(forimgs[fornext],{left:0},function () {
            forflag=true;
        });
        fordots[fornow].classList.remove("active");
        fordots[fornext].classList.add(("active"));
        fornow=fornext;
    }
    forrightbtn.onclick=function(){
        if (!forflag){
            return;
        }
        forflag=false;
        formove();
    }
    function formoveL(){
        fornext--;
        if (fornext<0){
            fornext=fordots.length-1;
        }
        forimgs[fornext].style.left=-forwidths+"px";
        animate(forimgs[fornow],{left:forwidths});
        animate(forimgs[fornext],{left:0},function () {
            forflag=true;
        });
        fordots[fornow].classList.remove("active");
        fordots[fornext].classList.add(("active"));
        fornow=fornext;
    }
    forleftbtn.onclick=function(){
        if (!forflag){
            return;
        }
        forflag=false;
        formoveL();
    }


// 返回顶部
    let back=document.querySelectorAll(".sort ul li")[3];
    // console.log(back);
    back.onclick=function(){
        animate(document.documentElement,{scrollTop:0},600);
    }

}
