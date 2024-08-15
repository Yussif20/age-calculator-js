import {
isDataValid,
calculateAge
} from "./utils.js"

const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");


const onClickHandler = ()=>{
    const dayElement = document.querySelector(".card__input[name ='day']");
    const monthElement = document.querySelector(".card__input[name ='month']");
    const yearElement = document.querySelector(".card__input[name ='year']");
    const ageLabel =document.querySelector(".card__resultValue");

    if(!isDataValid(dayElement,monthElement,yearElement)){
        ageLabel.textContent = "--"
        return;
    }
    ageLabel.textContent = calculateAge(yearElement.value,monthElement.value,dayElement.value)   
}

submitButton.addEventListener("click",onClickHandler)
inputElements.forEach((el)=>{
    el.addEventListener("keypress",event=>event.key ==="Enter" && onClickHandler())
})
