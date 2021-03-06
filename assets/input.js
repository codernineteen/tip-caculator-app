const bill = document.querySelector(".totalBill");
const people = document.querySelector(".totalPeople");
const tipPercent = document.querySelectorAll(".percentage");
const validateStyle = document.querySelector(".hidden");
const validateStyleTwo = document.querySelector(".hiddenTwo");
const resetBtn = document.querySelector(".resetButton");
const tipAmount = document.querySelector(".per");
const totalAmount = document.querySelector(".total");


let percentValue = 0;
let billValue = 0;
let peopleValue = 0;
let result;

bill.addEventListener('keyup', keyupFuncOne);
bill.addEventListener('change', tipCalculator);
people.addEventListener('keyup', keyupFuncTwo);
people.addEventListener('change', tipCalculator);
resetBtn.addEventListener('click', resetValues);

for (let i of tipPercent) {
    i.addEventListener('change', tipCalculator);
    if (i.classList[1] !== "custom") {
        i.addEventListener('click', clickFunc);
    } else {
        i.addEventListener('keyup', keyupFuncThree);
    }
    
}

function clickFunc(evt) {
    for (let i of tipPercent) {
        if (i.classList.contains("selected")) {
            i.classList.remove("selected");
        }
    }
    if(tipPercent[5].value !== "") {
        tipPercent[5].value = "";
    }
    evt.target.classList.add('selected');
    percentValue = Number(evt.target.value.split("%")[0]);
}

function keyupFuncOne(evt) {
    let tempValue = evt.target.value;
    if (tempValue === "0" || tempValue === "") {
        evt.target.classList.add("hiddenThree");
        validateStyle.style.display = "block";
    }
    else {
        evt.target.classList.remove("hiddenThree");
        validateStyle.style.display = "none";
        billValue = Number(tempValue);
    }
}

function keyupFuncTwo(evt) {
    let tempValue = evt.target.value;
    if (tempValue === "0" || tempValue === "") {
        evt.target.classList.add("hiddenThree");
        validateStyleTwo.style.display = "block";
    }
    else {
        evt.target.classList.remove("hiddenThree");
        validateStyleTwo.style.display = "none";
        peopleValue = Number(tempValue);
    }

}

function keyupFuncThree(evt) {
    evt.preventDefault();
    let tempValue = evt.target.value;
    if (tempValue === "0" || tempValue === "") {
        evt.target.classList.add("hiddenThree");
    }
    else {
        evt.target.classList.remove("hiddenThree");
        percentValue = Number(tempValue);
    }

    for (let i of tipPercent) {
        if (i.classList[1] !== "custom") {
            i.classList.remove("selected");
        }
    }
}

function tipCalculator(evt) {
    evt.preventDefault();
    result = Number((billValue/peopleValue));
    console.log(result)
    if (result !== Infinity){
        tipAmount.innerText = `$${Math.round(result*percentValue/100)}`;
        totalAmount.innerText = `$${Math.round(result)}`;
    }
    else {
        tipAmount.innerText = "$0.00";
        totalAmount.innerText = "$0.00";
    }
}

function resetValues() {
   window.location.reload();
}

