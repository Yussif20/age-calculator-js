const dayInput = document.querySelector(".day-input")
const monthInput = document.querySelector(".month-input")
const yearInput = document.querySelector(".year-input")
const calcButton = document.querySelector(".calc-btn")
const ageNumber =document.querySelector(".age")
const currentYear = new Date().getFullYear();
let age="";

const calcAge=()=>{
    const birthYear = dayInput.value;
    console.log(dayInput);
    age = currentYear - birthYear;
    ageNumber.textContent = age
}

calcButton.addEventListener("click",calcAge)