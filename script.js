const result =document.querySelector(".card__resultValue")
const calcButton = document.querySelector(".card__button")
const yearInput = document.querySelector("#year")
const currentYear = new Date().getFullYear();
let age = '';


const calcAge=()=>{
    const birthYear =parseInt(yearInput.value,10);
    age =  currentYear - birthYear;
    result.textContent = age
}

calcButton.addEventListener("click",calcAge)