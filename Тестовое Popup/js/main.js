
// Функция, реализующая ползунок
function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML = value;
    widthInput = document.getElementById('range').offsetWidth;
    document.getElementById("fillRangeValue").style.width = (value*widthInput)/10000 +"px";
}

// Функция, реализующая смену модальных окон
function onSubmitClick() {
    console.log("Форма отправлена");
    document.querySelector('.modal').style.visibility = "hidden";
    document.querySelector('.popup').style.visibility = "visible";
}