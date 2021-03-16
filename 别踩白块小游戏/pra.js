var mian = document.getElementById('main');
var go = document.getElementById('go');
var speed = 5, num = 0, timer, flag = true;
// 设置备选颜色
var color = ['red', 'green', 'pink', 'orange'];


// 创建每一行
function cDiv() {
    var oDiv = document.createElement('div');
    // 取出随机数  即为一行中随机位设置颜色 同时根据随机数设置随机颜色
    var index = Math.floor(Math.random() * 4);
    oDiv.setAttribute('class', 'row');
    // 创建列
    for (var i = 0; i < 4; i++) {
        var iDiv = document.createElement('div');
        oDiv.appendChild(iDiv);
    }
    // 将目标小方块设置class名
    var clickDiv = oDiv.childNodes[index];
    clickDiv.setAttribute('class', 'target');
    clickDiv.style.backgroundColor = color[index];
    // 将创建的每一行插入到运动元素中  如果没有子元素直接插入
    if (main.childNodes.length == 0) {
        main.appendChild(oDiv);
        // 如果有子元素  将新创建的一行插入到运动元素最上面
    } else {
        main.insertBefore(oDiv, main.childNodes[0]);
    }
}

// 移动元素
function move() {
    clearInterval(timer);
    // 设置定时器
    timer = setInterval(function(){
        // 根据速度计算下一刻位置
        console.log( parseInt(main.offsetTop))
        var step = parseInt(main.offsetTop) + 1;
        main.style.top = step + 'px';
        // 如果运动到显示区域  回到初始位置
        if(parseInt(main.offsetTop) >= 0){
            console.log(111)
            cDiv();
            main.style.top = '-150px';
        }
        // 获得整体内容行数的长度 
        var len = main.childNodes.length;
        // 如果当前行数为6，即显示区域4行  上一行预留新创建  预留最后一行
        if (len == 6) {
            // 遍历最后一行中的每一个方块
            for (var i = 0; i < 4; i++) {
                // 如果最后一行包含未点击方块  游戏结束
                if (main.childNodes[len - 1].children[i].classList.contains('target')) {
                    alert('游戏结束，得分：' + num);
                    clearInterval(timer);
                    // 打开锁
                    flag = false;
                }
            }
            // 移除最后一行
            main.removeChild(main.childNodes[len - 1]);
        }
    },20);
}

function bindEvent() {
    // 点击开始按钮
    go.addEventListener('click', function () {
        console.log('22213');
        
        go.style.display = 'none';
        // 开始移动
        move();
    });
    // 点击每一个带有颜色的小方块
    main.addEventListener('click',function(e){
        // 判断是否在游戏状态  如果是的话 点击更改背景颜色
        if(flag){
            var tar = e.target;
            if(tar.className == 'target'){
                tar.style.backgroundColor = '#bbb';
                tar.classList.remove('target');
                num ++;
                // 如果点到了白块  游戏结束  清除定时器
            }else {
                alert('游戏结束:得分' + num);
                clearInterval(timer);
                flag = false;
            }
            // 如果得分是十的整数倍  速度变大
            if(num %10 == 0){
                speed ++;
            }
        }
    });
}
bindEvent();