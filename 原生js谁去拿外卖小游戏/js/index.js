
/**
 * 
 * who take out    nan.xue
 */

(function () {
    var logoNode = document.getElementById('logo');
    var maskNode = document.getElementsByClassName('mask')[0];
    var closeNode = document.getElementById('close');
    var arrList = [];
    var ullist = document.getElementsByTagName('ul')[0];
    var min = null;
    var index = null;
    // 点开弹出  点x关闭
    logoNode.onclick = function () {
        maskNode.style.display = 'block';
        closeNode.onclick = function () {
            maskNode.style.display = 'none';
        }
    }

    var buttonNode = document.getElementsByTagName('button')[0];
    buttonNode.onmouseenter = function () {
        this.style.backgroundPosition = '0 ' + (-40) + 'px';
        this.onmouseleave = function () {
            this.style.backgroundPosition = '0 ' + (0) + 'px';
        }
    }

    buttonNode.onmousedown = function () {
        this.style.backgroundPosition = '0 ' + (-80) + 'px';
        //创建随机数 
        creatNumer();
        this.onmouseup = function () {
            this.style.backgroundPosition = '0 ' + (0) + 'px';
        }
    }
    //--------------分割线---------------------

    function creatNumer() {
        var someOne = Math.floor(Math.random() * 100);//创建0---100随机整数
        console.log(arrList);
        //[8, 72, 36, 56, 81, 51, 31, 97]
        if(someOne == min){
            creatNumer();
            return;
        }//判断最小值重复
        arrList.push(someOne);

        if (arrList.length > 10) {
            if(someOne > min && index == 0){
                arrList.splice(1,1);   
            }else{
                arrList.shift();
            }
            
        }
        min = arrList.min();//最小值
        index = arrList.indexOf(min);//最小值在数组中的索引
        
        refurbishDom(arrList,index);//刷新dom
    }

    function refurbishDom(arr,index) {
        ullist.innerHTML = '';
        var len = arr.length;
        var str = '';
        for (var i = 0; i < len; i++) {
            str += '<li>扔出了一个' + arr[i] + '</li>';
        }
        ullist.innerHTML = str;
        ullist.getElementsByTagName('li')[index].className  = 'takeout';
    }
    //数组当中最小值
    Array.prototype.min = function () {
        var min = this[0];
        var len = this.length;
        for (var i = 1; i < len; i++) {
            if (this[i] < min) {
                min = this[i];
            }
        }
        return min;
    }


})()