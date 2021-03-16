


window.onload = function () {
    fun();
}
function fun() {
    var sliderItem = document.getElementsByClassName("sliderItem");
    var chooseItem = document.getElementsByClassName("chooseItem");

    for (var i = 0; i < chooseItem.length; i++) {
        (function (j) {
            chooseItem[j].onclick = function () {
                for (var k = 0; k < chooseItem.length; k++) {
                    chooseItem[k].className = "chooseItem";
                    sliderItem[k].className = "sliderItem";
                    console.log(k);
                }
                this.className += " cur";
                sliderItem[j].className += " active";

            }
        })(i);
    }

}

