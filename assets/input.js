const bill = document.querySelector(".totalBill");
const people = document.querySelector(".totalPeople");
const tipPercent = document.querySelectorAll(".percentage");
const validateStyle = document.querySelector(".hidden");
const validateStyleTwo = document.querySelector(".hiddenTwo");
const resetBtn = document.querySelector(".resetButton");


let percentValue = 0;
let billValue = 0;
let peopleValue = 0;

bill.addEventListener('keyup', keyupFuncOne);
people.addEventListener('keyup', keyupFuncTwo);
resetBtn.addEventListener('click', resetValues);

for (let i of tipPercent) {
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

function tipCalculator() {
    console.log(billValue*percentValue/100/peoplevalue);
    return billValue*percentValue/100/peopleValue;
}

function resetValues() {
    billValue = 0;
    percentValue = 0;
    peopleValue = 0;
    bill.value = "";
    people.value = "";
    for (let i of tipPercent) {
        if (i.classList[1] == "custom") {
            i.value = "";
        }
        else {
            i.classList.remove("selected");
        }
    }
}

if (billValue !== "" && percentValue !== "" && peopleValue !== ""){
    tipCalculator();
}

