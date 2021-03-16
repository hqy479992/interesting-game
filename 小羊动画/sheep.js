
    const sheep = {
        parms:{
            sheepStep:15,   //移动速度
            imgStep:0,  //动画背景x
            stage : document.getElementsByClassName("stage")[0],
            frenquency:80,
        },
        
        init:function () {
            // alert("1");
            // var a = 1;
            this.create();
            // var self = this;
            // setInterval(()=>{
            //     console.log(this)
            // })
        },
        create:function(){

         function ClassSheep(data) {
            //  debugger;
            this.sheepDiv = document.createElement("div");
            this.sheepDiv.className = "sheepDiv";
            // sheepDiv.style.left = sheepDiv.offsetLeft - this.sheepStep + 'px';
            // console.log(data.stage)
            data.stage.appendChild(this.sheepDiv);
            this.stage = data.stage;
            this.width = this.sheepDiv.offsetWidth;
            this.frenquency =   Math.floor(Math.random() * data.frenquency) + 30;
            this.sheepStep  = data.sheepStep;
            this.imgStep = data.imgStep;
            this.top = 0;
            this.sheepStep2 = data.sheepStep;
            }

         var self = this;
         var timer = setInterval(function(){
             var num  = self.parms.stage.children.length;
             if(num < 4 ){
                 var one = new ClassSheep(self.parms);
                //  console.log(one);  
                 self.running(one);
             }
         },2000)
        },


        running:function(obj){
            // console.log(obj)
                obj.Animate = setInterval(function(){
                    var move = obj.sheepDiv.offsetLeft - obj.sheepStep ;
                    // var stage = document.getElementsByClassName("stage")[0];
                    obj.sheepDiv.style.left = move + 'px';
                    if(move <=   -obj.width){
                        clearInterval(obj.Animate);
                        
                        obj.stage.removeChild(obj.sheepDiv);
                        // console.log("remove")
                    }
                    obj.imgStep = obj.imgStep + obj.width;
                    if(obj.imgStep == (obj.width * 4)){
                        obj.imgStep = 0;
                    }
                    obj.sheepDiv.style.backgroundPosition = -obj.imgStep + "px " + obj.top + "px";
                },obj.frenquency);

                //小羊的拖拽

                obj.sheepDiv.onmousedown = function (e) {  
                    // debugger;
                    // console.log(e)
                    // e   = e || window.event;
                    
                    obj.s_x = e.pageX;
                    obj.s_y = e.pageY;
                    obj.sheepStep = 0;
                    obj.top =  -128;
                
                    document.onmousemove = function(e){
                        // e = e || window.event;
                       var disX = e.pageX - obj.s_x;
                       var disY = e.pageY - obj.s_y;
                       console.log(obj.top);
                       obj.sheepDiv.style.left = disX + obj.sheepDiv.offsetLeft + 'px';
                       obj.sheepDiv.style.top = disY + obj.sheepDiv.offsetTop + 'px';
                       //更新到最新
                       obj.s_x = e.pageX;
                       obj.s_y = e.pageY;
                    }
                
                //    document.addEventListener('mouseup',mouseUpFn)
                    document.onmouseup = function(e){
                        console.log(obj.top)
                    //    document.removeEventListener('mousemove',mouseFn)
                        document.onmousemove = null;
                        obj.top = 0;
                        obj.sheepStep = obj.sheepStep2;
                    };
                    
                };


        }
    }

        sheep.init();








    
    //sheep物体自身往左动
    //图片位置和sheep保持一致


    //一只羊的动画
    // var sheepDiv = document.getElementsByClassName("sheep")[0];
    // var sheepStep =  10;
    // var imgLeft = 0;

    // var timer = setInterval(function(){
        
    //     sheepDiv.style.left = sheepDiv.offsetLeft - sheepStep + 'px';
    // },80)

    // var Mover = setInterval(function(){
    //     imgLeft = imgLeft + 164;
    //     if(imgLeft == 1312){
    //         imgLeft = 0;
    //     }
    //     sheepDiv.style.backgroundPosition = -imgLeft + "px " + 0 + "px";
    // },80)

