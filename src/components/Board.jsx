import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  const handleClick = (index) => {
    if (winner) return alert("Game is Over");
    if (state[index]) return alert("Already Filled");
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setXturn(!isXturn);
  };

  const checkWinner = () => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const Line of winnerLines) {
      const [a, b, c] = Line;
      if (state[a] && state[a] === state[b] && state[b] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const checkEmpty = () => {
    return state.filter((s) => s === null).length === 0;
  };

  const winner = checkWinner();
  const empty = checkEmpty();
  return (
    <>
      <div className="todo">
        <h3>Tic Tac Toe</h3>
        <p>Player {isXturn ? "X" : "O"} Moves</p>
        {winner && <h3> Winner is {isXturn ? "O" : "X"}</h3>}
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
        {(winner || empty) && (
          <button onClick={() => setState(Array(9).fill(null))} className="play-button">
            Play Again
          </button>
        )}
      </div>
    </>
  );
}

export default Board;
