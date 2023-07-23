import React, { Component, useState } from "react";

export default function Board() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const winner = checkWinner(values);
  let status = (winner)?winner+" is the winner!":player+"'s turn";
  function handleClick(idx){
    if (values[idx] || checkWinner(values)){
      console.log("Square filled!");
      return;
    }
    const nextValues = values.slice();
    nextValues[idx] = player;
    setValues(nextValues);
    (player==='X')?setPlayer('O'):setPlayer('X');
  }

  function reset(){
    setValues(Array(9).fill(null));
    setPlayer('X');
  }

  function checkWinner(values){
    let lines;
    lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6]
    ];
    for (let i=0; i<lines.length; i++){
      const [a, b, c] = lines[i];
      if (values[a] && values[a]===values[b] && values[a]===values[c]){
        console.log(values[a]+" is the winner!");
        return values[a];
      }
    }
    return null;
  }
  return (
    <div>
      <div className="status">
        { status }
      </div>
      <div className="board-row">
        <Square value={values[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={values[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={values[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={values[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={values[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={values[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={values[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={values[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={values[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div>
        <button onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}

function Square({ value , onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}