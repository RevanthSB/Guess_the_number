let i = 20;
let number = Math.trunc(Math.random() * 21);
console.log(number);

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  i = i - 1;
  let valuefrom = Number(document.querySelector(".guess").value);
  let guess = number - valuefrom;

  if (valuefrom === 0) {
    document.querySelector(".message").textContent = "No Number";
  } else if (valuefrom === number) {
    document.querySelector(".whole").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "140px";
    if (number >= 10 && number < 20) {
      document.querySelector(".number").style.paddingLeft = "20px";
    } else if (number === 20) {
      document.querySelector(".number").style.paddingLeft = "29px";
    } else {
      document.querySelector(".number").style.paddingLeft = "45px";
    }

    document.querySelector(".message").textContent = "you win";
    document.querySelector(".number").textContent = number;

    if (highscore < i) {
      highscore = i;
      document.querySelector(".highscore").textContent = highscore;
    } else {
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess <= 3 && guess >= -3) {
    document.querySelector(".message").textContent = "Too high";
  } else {
    document.querySelector(".message").textContent = "Too low";
  }

  if (i > 0) {
    document.querySelector(".score").textContent = i;
  } else {
    document.querySelector(".score").textContent = "0";
    document.querySelector(".message").textContent = "you have lost the game";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 21);
  console.log(number);
  document.querySelector(".whole").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "80px";
  document.querySelector(".number").style.paddingLeft = "20px";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".message").textContent = "Start guessing....";
  i = 20;
});
