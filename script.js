// pure functions      -     functional programming

const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");
const ageLabel =document.querySelector(".card__resultValue");
let age ;


const onClickHandler = ()=>{
    console.log("you clicked me")
}
const calculateAge =(year=2001,month=6,day=1)=>{
    const currentMonth = (new Date().getMonth() + 1);
    const currentYear = new Date().getFullYear();
    const today = new Date().getDate();
    console.log(typeof(day))
    console.log(typeof(currentMonth));
    console.log(typeof(currentYear));
    console.log(typeof(year));

    if(today >= day && currentMonth >= month){
         age =currentYear - parseInt(year);
         console.log(age)
    }else{
        age =currentYear - parseInt(year) -1;
        console.log(age)

    }
    ageLabel.textContent = age   
}

submitButton.addEventListener("click",calculateAge)
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