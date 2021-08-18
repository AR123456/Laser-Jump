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
let speed, score, nextBuildingX, gameProgress, lastHeight, lastTime;

//on click event - oculd add on keyboard type function
gameContainer.addEventListener("click", () => {
  //swithch case turn game on if it is on jump
  switch (gameStatus) {
    case "start":
    case "end":
      startGame();
      break;
    case "on":
      jump();
      break;
  }
});
// Game functions
function startGame() {
  //reset all game variables
  buildings.splice(0, buildings.length);
  buildingsDiv.innerHTML = "";
  //player object
  player.x = 480;
  player.y = 0;
  player.v = 0;
  // Speed of game progress
  speed = 1;
  score = 0;
  nextBuildingX = 960;
  gameProgress = 0;
  // of last building so jump is not too big
  lastHeight = 0;

  //start game
  gameStatus = "on";
  render();
}

function jump() {
  //controle velocity
}
function render() {
  ////////////////////////////main gamin function
  // set the delta time  https://www.youtube.com/watch?v=atxvy-FVz4Y
  const thisTime = performance.now();
  //   delta time
  const dt = Math.min(32, Math.max(8, thisTime - lastTime)) / 16.666;
  lastTime = thistime;
  // render buildings
  if (nextBuidingX < gameProgress + 960 + speed * dt) {
    createBuildings();
  }
  // render player
  // render road
  // render distroy buildings
  // render set progress and re render
  // increase speed
  speed += 0.001 * dt;
  // game progress set to speed
  gameProgress += speed * dt;
  if (gameStatus === "on") {
    requestAnimationFrame(render);
  }
}
function createBuildings() {
  //building object  and div
  const building = {
    x: nextBuildingX,
    width: 60 + Math.random() * 60,
    height: Math.min(
      Math.max(30 + Math.round(Math.random() * 120), lastHeight - 30),
      lastHeight + 30
    ),
  };
  //   each of the 12 parts of the div will eventually explode in all directions
  const buildingDiv = document.createElement("div");
  buildingDiv.classList = "building";
  buildingDiv.style.width = building.width + "px";
  buildingDiv.style.height = buiding.height + "px";
  // style will need hue
  buildingDiv.style.setProperty("--hue", Math.random() * 360 + "deg");
  // https://www.youtube.com/watch?v=atxvy-FVz4Y
  buildingDiv.style.setProperty(
    "--buildingImageX",
    Math.floor(Math.random() * 4) * 27.08333 + "%"
  );
  for (let i = 0; i < 12; i++) {
    const fragmentDiv = document.createElement("div");
    fragmentDiv.classList = "building_fragment";
    fragmentDiv.style.setProperty("--tx", Math.random() * -120 + "px");
    fragmentDiv.style.setProperty("--ty", Math.random() * -160 + "px");
    fragmentDiv.style.setProperty("--rx", Math.random() * 360 + "deg");
    fragmentDiv.style.setProperty("--ry", Math.random() * 360 + "deg");
    fragmentDiv.style.setProperty("--rz", Math.random() * 360 + "deg");
    // add fragments to the building div
    buildingDiv.appendChild(fragmentDiv);
  }
  building.div = buildingDiv;
  buildingsDiv.appendChild(buildingDiv);
  buildings.push(building);
  // add building width next building x
  nextBuildingX += building.width;
  lastHeight = building.height;
}
