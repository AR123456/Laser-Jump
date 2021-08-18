// DOM  variables
// const scoreDiv = document.querySelector(".score");
// const msgDiv = document.querySelector(".msg");
const gameContainer = document.querySelector(".game");
const playerDiv = document.querySelector(".player");
const buildingsDiv = document.querySelector(".buildings");
const road = document.querySelector(".road");

// Game vars
// gravity
const g = 0.098;
const buildings = [];
const player = {
  x: 320,
  y: 0,
  //   velocity jump up is + , down is -
  v: 0,
};
let gameStatus = "start";
let speed, score, nextBuildingX, gameProgress, lastHeight;

//on click event - oculd add on keyboard type function
gameContainer.addEventListener("click", () => {
  //swithch case turn game on if it is on jump
});
// Game functions
function startGame() {
  //reset all game variables
  //start gane
}

function jump() {
  //controle velocity
}
function render() {
  // main gamin function
  // render building s
  // render player
  // render road
  // render distroy buildings
  // render set progress and re render
}
function createBuildings() {
  //
}
