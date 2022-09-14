

let inputIn = document.querySelector(".window_1");
let inputIn2 = document.querySelector(".window_2");
let buttonCalculate = document.querySelector(".calculate");
let buttonClear = document.querySelector(".clear");
let div = document.querySelector(".result");


buttonCalculate.onclick = function () {

let a = inputIn.value;
let b = inputIn2.value;
let c = b / a;
console.log(div.innerHTML)
div.innerHTML = `${c.toFixed(7)} BTC`;
}

buttonClear.onclick = function () {
inputIn.value = "";
inputIn2.value = "";
div.innerHTML = 0;
}
