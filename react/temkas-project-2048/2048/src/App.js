import { useState } from "react";
import "./App.css";

function App() {
  const [puzzle, setPuzzle] = useState([
    [2, 2, 2, 2],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  const random = (puzzle) => {
    let arr = [];
    puzzle.map((row, i) => {
      row.filter((tile, j) => {
        console.log(j);
        return tile === null && arr.push([i, j]);
      });
    });
    const random = randomNumber(arr.length - 1);
    const randomTile = arr[random];
    const chance = randomNumber(3);
    let num = chance === 1 ? 4 : 2;
    puzzle[randomTile[0]][randomTile[1]] = num;
  };

  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ));
  };

  const rotatePuzzle = (puzzle) => {
    const newPuzzle = [];
    for (let i = 0; i < 4; i++) {
      newPuzzle.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newPuzzle[j].push(puzzle[i][j]);
      }
    }
    return newPuzzle;
  };

  const moveLeft = (puzzle, type) => {
    const newPuzzle = [];

    for (const row of puzzle) {
      const newRow = [];
      const filteredCols = row.filter((cols) => cols !== null);

      for (let i = 0; i < filteredCols.length; i++) {
        if (filteredCols[i] === filteredCols[i + 1]) {
          newRow.push(filteredCols[i] + filteredCols[i + 1]);
          i++;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }

      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow);
    }
    if (!type) random(newPuzzle);
    return newPuzzle;
  };

  const moveRight = (puzzle, type) => {
    const newPuzzle = [];

    for (const row of puzzle) {
      const newRow = [];
      const filteredCols = row.filter((cols) => cols !== null);

      for (let i = filteredCols.length - 1; i >= 0; i--) {
        if (filteredCols[i] === filteredCols[i - 1]) {
          newRow.push(filteredCols[i] + filteredCols[i - 1]);
          i--;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }

      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow.reverse());
    }
    if (!type) random(newPuzzle);
    return newPuzzle;
  };

  const moveUp = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveLeft(result, "aa");
    result = rotatePuzzle(result);
    random(result);
    return result;
  };

  const moveDown = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveRight(result, "aa");
    result = rotatePuzzle(result);
    random(result);
    return result;
  };

  const handleKeys = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setPuzzle(moveDown(puzzle));
        break;
      case "ArrowUp":
        setPuzzle(moveUp(puzzle));
        break;
      case "ArrowLeft":
        setPuzzle(moveLeft(puzzle));
        break;
      case "ArrowRight":
        setPuzzle(moveRight(puzzle));
        break;

      default:
        console.log("non binary key ");
        break;
    }
  };

  return (
    <div className="wrapper" onKeyDown={handleKeys} tabIndex={0}>
      <h1>2048 Game</h1>
      <button onClick={moveLeft}>left</button>
      <button onClick={moveRight}>right</button>
      <div className="board">
        {puzzle.map((row, index) => {
          return <PuzzleRow row={row} key={`row-${index}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
