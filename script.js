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
const calculateAge =(year=2001,month=6,day=1)=>{
    const birthDate = new Date(year,month -1,day);
    const today = new Date(); 

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const currentYear = today.getFullYear();

    const birthDay = birthDate.getDate();
    const birthMonth =birthDate.getMonth();
    const birthYear =birthDate.getFullYear();

    let age = currentYear -birthYear;

    // const currentMonth = (new Date().getMonth() + 1);
    // const currentYear = new Date().getFullYear();
    // const today = new Date().getDate();
    // console.log(typeof(day))
    // console.log(typeof(currentMonth));
    // console.log(typeof(currentYear));
    // console.log(typeof(year));

    if(currentDay >= birthDay && currentMonth >=birthMonth){
        age =age;
    }else{
       age--;
    }
    return age  
}

submitButton.addEventListener("click",onClickHandler)
// const result =document.querySelector(".card__resultValue")
// const calcButton = document.querySelector(".card__button")
// const yearInput = document.querySelector("#year")
// const currentYear = new Date().getFullYear();
// let age = '';


// const calcAge=()=>{
//     const birthYear =parseInt(yearInput.value,10);
//     age =  currentYear - birthYear;
//     result.textContent = age
// }

// calcButton.addEventListener("click",calcAge) 