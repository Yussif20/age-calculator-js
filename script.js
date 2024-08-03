// pure functions      -     functional programming

const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");


const onClickHandler = ()=>{
    const dayElement = document.querySelector(".card__input[name ='day']");
    const monthElement = document.querySelector(".card__input[name ='month']");
    const yearElement = document.querySelector(".card__input[name ='year']");
    const ageLabel =document.querySelector(".card__resultValue");

    ageLabel.textContent = calculateAge(yearElement.value,monthElement.value,dayElement.value)   
}
const calculateAge =(year,month,day)=>{
    const birthDate = new Date(year,month-1,day);
    const today = new Date(); 

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const currentYear = today.getFullYear();

    const birthDay = birthDate.getDate();
    const birthMonth =birthDate.getMonth();
    const birthYear =birthDate.getFullYear();

    const hasCompleteYear = currentMonth >= birthMonth && currentDay >= birthDay

    let age = currentYear - (hasCompleteYear?birthYear:birthYear+1);

    return age  
}

submitButton.addEventListener("click",onClickHandler)
