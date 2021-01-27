// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer an alert

const form = document.querySelector("#myForm");
const answer = document.querySelector("#answer");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let x = num1.value;
  let y = num2.value;

  if (e.submitter.id == "multiply") {
    alert(answer.value) = parseInt(x) * parseInt(y);
  }
});

// Q2:
// update #box to the background color green when
//myBtn is clicked

const box = document.querySelector("#box");
const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {
  const box = (document.querySelector("#box").style.background.color = green);
});
