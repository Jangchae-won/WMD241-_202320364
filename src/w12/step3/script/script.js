let elemBody = document.body;
console.log(elemBody);
// elemBody.style.backgroundColor = "#00000f";
// let aCard = document.querySelector(".card");
// aCard.addEventListener("click", function () {
//   console.log("클릭!");
//   // aCard.style.backgroundColor = '#ff0000';
//   aCard.classList.toggle("card--state-clicked");
//   console.log(aCard.classList);
// });
let cards = document.querySelectorAll(".card");
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-clicked");
  });
}

// cards.forEach((eachCard) => {
//   eachCard.addEventListener("click", function() {})
// });

// document.querySelectorAll('.card');
