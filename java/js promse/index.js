// ondog sharah

// const rawEgg = " tuuhii ondog";

// function cookEgg(rawEgg) {
//   const isForgetToFlip = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout( ()=> {
//       if (!isForgetToFlip) {
//         resolve("cooked egg");
//       } else {
//         reject("half burnt egg");
//       }
//     }, 2000);
//   });
//   return Promise;
// }
// let result = rawEgg;
// cookEgg(rawEgg)
//   .then((res) => {
//     result = res;
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ondog chanah

//
// game
const puzzle = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 1, 2, 3],
  [4, 5, 6, 7],
];
let found = 0;
let flippedItem;

const gameTarget = document.querySelector("#gameTarget");

function getTile(value) {
  const tile = document.createElement("li");
  const tileFront = document.createElement("div");
  tileFront.innerHTML = value;
  tileFront.classList.add("front");
  tile.appendChild(tileFront);
  const tileBack = document.createElement("div");
  tileBack.classList.add("back");
  tile.appendChild(tileBack);
  tile.addEventListener("click", () => {});
  return tile;
}

for (let row = 0; row < puzzle.length; row++) {
  const rowItems = puzzle[row];
  for (let col = 0; col < rowItems.length; col++) {
    gameTarget.appendChild(getTile(rowItems[col]));
  }
}
