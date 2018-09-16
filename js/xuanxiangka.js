
// 1.获取元素
// let lis=document.querySelectorAll("li");
// let son=document.querySelectorAll(".son");
// console.log(son);

// list:父元素的名称；
// son:子元素的名称；






// 选项卡
function xuanxiangka(lis,son) {
    // 2.遍历每一个li
    for (let i=0;i<lis.length;i++) {
        // 3.当鼠标移入每一个li时的操作
        lis[i].onmouseover=function () {
            // 4.其余子元素消失
            for (let j=0;j<son.length;j++){
                son[j].style.display="none";
            }
            // 5.当前子元素出现
            son[i].style.display="block";
        }

    }
}
