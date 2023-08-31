const buttondBc = document.querySelector(".btn-bc")
const buttonTitle = document.querySelector("#btn-bc")
const buttonCircles = document.querySelector("#btn-circles")
const body = document.querySelector("body");

body.style.backgroundColor = "green";

console.log({buttondBc, buttonTitle, buttonCircles})

buttondBc.addEventListener('click',()=>{
    body.style.backgroundColor = "yellow";
})