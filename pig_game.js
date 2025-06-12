"use strict";
const playertoggle1 = document.querySelector(".Main_player1");
const playertoggle2 = document.querySelector(".Main_player2");
const score_1 = document.getElementById("dice_player--0");
const score_2 = document.getElementById("dice_player--1");
const current_score0 = document.getElementById("current_score--0");
const current_score1 = document.getElementById("current_score--1");
const score_current1 = document.querySelector(".score1");
const score_current2 = document.querySelector(".score2");
const dice_no = document.querySelector(".dice_pic");
const btn_roll = document.querySelector(".dice_roll");
const btn_hold = document.querySelector(".hold");
const btn_new = document.querySelector(".new_game");

let scores = [0, 0];
score_1.textContent = 0;
score_2.textContent = 0;
let current_score = 0;
let activeplayer = 0;
dice_no.classList.add("hidden");

const switchplayer = function () {
  current_score = 0;
  document.getElementById(`current_score--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
};

btn_roll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  dice_no.classList.remove("hidden");
  dice_no.src = `dice-${dice}.png`;
  if (dice !== 1) {
    current_score = current_score + dice;
    document.getElementById(`current_score--${activeplayer}`).textContent =
      current_score;
    playertoggle1.classList.toggle("active_player1");

    // current_score0.textContent = current_score;
  } else {
    switchplayer();
    // current_score = 0;
    // document.getElementById(`current_score--${activeplayer}`).textContent = 0;
    // activeplayer = activeplayer === 0 ? 1 : 0;
  }
});
btn_hold.addEventListener("click", function () {
  scores[activeplayer] += current_score;
  console.log(scores[activeplayer]);
  document.getElementById(`dice_player--${activeplayer}`).textContent =
    scores[activeplayer];

  switchplayer();
});
