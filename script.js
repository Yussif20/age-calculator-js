// pure functions      -     functional programming

const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

const validateDay=(day)=>{
    if(day && day > 0 && day <= 31){
        return true
    }
}
const validateMonth=(month)=>{
    if(month && month > 0 && month <= 12){
        return true
    }
}
const validateYear=(year)=>{
    const currentYear = new Date().getFullYear()
    if(year && year > 0 && year <= currentYear){
        return true
    }
}
const isDataValid =(dayElement,monthElement,yearElement)=>{
    const isValid = [false,false,false];

    if(!validateDay(dayElement.value)){
        dayElement.classList.add("card__input--error")
    }else {
        isValid[0]=true;
        dayElement.classList.remove("card__input--error")
    }

    if(!validateMonth(monthElement.value)){
        monthElement.classList.add("card__input--error")
    }else {
        isValid[1]=true;
        monthElement.classList.remove("card__input--error")
    }

    if(!validateYear(yearElement.value)){
        yearElement.classList.add("card__input--error")
    }else {
        isValid[2]=true;
        yearElement.classList.remove("card__input--error")
    }
    return isValid.every(item => item ===true)
}




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
inputElements.forEach((el)=>{
    el.addEventListener("keypress",event=>event.key ==="Enter" && onClickHandler())
})
