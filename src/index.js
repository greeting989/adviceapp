import "./styles.css";
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
let getQuotes = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((res) => {
      quote.innerText = res.slip.advice;
    });
};
btn.addEventListener("click", getQuotes);
