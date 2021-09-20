const bill = document.querySelector(".totalBill");
const people = document.querySelector(".totalPeople");
const tipPercent = document.querySelectorAll(".percentage");
const validateStyle = document.querySelector(".hidden");


let percentValue = 0;
let billValue = 0;
let peopleValue = 0;

bill.addEventListener('keyup', keyupFuncOne);
people.addEventListener('keyup', keyupFuncOne);

for (let i of tipPercent) {
    if (i.classList[1] !== "custom") {
        i.addEventListener('click', clickedStyle);
    } else {
        i.addEventListener('keyup', keyupFunc);
    }
    
}

function clickedStyle(evt) {
    for (let i of tipPercent) {
        if (i.classList.contains("selected")) {
            i.classList.remove("selected");
        }
    }
    evt.target.classList.add('selected');
}

function keyupFuncOne(evt) {
    if (evt.target.value === "0") {
        evt.target.classList.add("hiddenTwo");
        validateStyle.style.display = "block";
    }
    else {
        evt.target.classList.remove("hiddenTwo");
        validateStyle.style.display = "none";
    }

}

function keyupFuncTwo(evt) {
    
}

function tipCalculator(bill, percent, people) {
    console.log(bill*percent/100/people);
    return bill*percent/100/people;
}


