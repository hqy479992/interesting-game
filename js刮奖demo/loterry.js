    
var canvas = document.getElementById('prize');
var item = document.getElementsByClassName('item')[0];  //抽奖内容文字div
var ctx = canvas.getContext('2d');

ctx.rect (100,100,400,400); //（x,y,width,height）的矩形
ctx.lineWidth = 2;          //边框线
ctx.fillStyle = "gray";     //填充颜色
ctx.strokeStyle = "#c00";   //线条颜色

ctx.fill();                 //填充
ctx.stroke();               //画线

// debugger;
//作用域 按下和移动是一个完整的操作
canvas.onmousedown = function(){
    canvas.onmousemove = function (e) {
            ctx.clearRect(e.clientX ,e.clientY,20,20); 
    }
}

canvas.onmouseup = function(e){
    canvas.onmousemove = null;
}

var arr = ["一个亿",'劳斯莱斯','洋房'];
var i =  Math.floor( Math.random() * arr.length)
var text = arr[i];
item.innerHTML = text;




