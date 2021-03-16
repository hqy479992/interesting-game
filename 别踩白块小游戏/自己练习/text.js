var go = document.getElementById('go');

let main  =  document.getElementById('main');

let num = 0, flag = true,timer = 0,speed=1;
const   color = ['red', 'green', 'pink', 'orange'];

// 创建每一行
function createDiv(){
    var square = document.createElement('div');
    square.setAttribute('class','row');
    for(let i = 0 ;i < 4;i++){
        let aDiv =  document.createElement('div')
        square.appendChild(aDiv);
    }
    //随机为每一行创建一个有颜色的目标正确方块

    let index = Math.floor( Math.random() * 4);
    
    var targetDiv = square.childNodes[index];
    targetDiv.setAttribute('class','target');
    targetDiv.style.backgroundColor =  color[index];

    if(main.childNodes.length == 0){
        main.appendChild(square)
    }else{
        main.insertBefore(square,main.childNodes[0]);
    }
}

//移动
function move(){
    console.log('move');
    
    clearInterval(timer);

    timer = setInterval(function(){
        let step = parseInt(main.offsetTop) + 20;
        console.log(step);
        
        main.style.top = step + 'px';
        
        if(parseInt(main.offsetTop) >= 0){
            createDiv();
            main.style.top = '-150px';
        }
        var len =  main.childNodes.length;
        if(len == 6){
            for(var i = 0;i < 4;i++){
                if(main.childNodes[len-1].children[i].classList.contains('target')){
                    alert('游戏结束');
                    clearInterval(timer);
                    flag = false;
                }
            }
        main.removeChild(main.childNodes[len-1])
        } 
    },80)
}


function gostart(){
    console.log('statrt');
    
    // 点击开始按钮
    go.addEventListener('click', function () {
        console.log('22213');
        
        go.style.display = 'none';
        // 开始移动
        move();
    });
    //点击每一个带有颜色的
    main.addEventListener('click',function(e){
        //判断是否在游戏
        if(flag){
            console.log('true')
            let tar =  e.target;
            if(tar.className == 'target'){
                tar.style.backgroundColor = '#bbb';
                tar.classList.remove('target');
                num++;             
            }else{
                console.log('false')
                alert('游戏结束,得分'+num);
                clearInterval(timer)
                flag = false;
            }

            if(num%10 == 0 ){
                speed++;
            }
        }
    })


}


gostart();