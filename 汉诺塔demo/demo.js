var minWidth = 100,
    step = 60;
var column = {
    c1: [4, 3, 2, 1],
    c2: [],
    c3: []
};
// var c1 = document.getElementByName("c1");

//   console.log(render('c1'));

/**
 * 渲染柱子上的圆盘
 * 在柱子的div容器中添加类名为circle的div,并且设置样式(高)
 * 高度=最小高度+(自身的编号值而不是索引值-1)*步长
*/

function rendercolumn() {
    render('c1');
    render('c2');
    render('c3');
  
}
function render(cno) {
    var divColumn = document.getElementById(cno);//得到柱子的容器,为了在里面添加子节点(圆盘)
    divColumn.innerHTML = '';

    // console.log(divColumn)//c1
    var arr = column[cno]; //取得每个柱子的数组column.cno = columm[cno]
    var arr = column[cno];
    for (i = 0; i < arr.length; i++) {

        var num = arr[i]; //取索引值对应的数组里的编号值,为了计算每个编号不同的圆盘的宽
        var div = document.createElement('div');
        div.className = 'circle';
        circle.style.width = minWidth + (num - 1) * step + 'px';

        divColumn.appendChild(circle);
    }
}

function move(from, to) {
    var fromArr = column[from],
        toArr = column[to];
    // 判断移动的条件
    if (from === to) {
        return;
    } if (fromArr.length === 0) {
        return;
    }else {
        _move(fromArr, toArr);
    }

}

function _move(fromArr, toArr) {
    toArr.push(fromArr.pop());
    rendercolumn();
}

function init(){
    var btns= document.getElementById('btns');
    btns.onclick = function (e) {
        // console.log(e.target)
        if(e.target.tagName!=="BUTTON"){
            return;
        }
        var from = e.target.getAttribute('from'),
            to = e.target.getAttribute('to');
        move(from, to);
    }
};
init();