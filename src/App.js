import React, { Component, useState } from "react";

export default function Board() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  function handleClick(idx){
    if (values[idx]!= null){
      console.log("Square filled!");
      return;
    }
    const nextValues = values.slice();
    nextValues[idx] = player;
    setValues(nextValues);
    (player==='X')?setPlayer('O'):setPlayer('X');
  }
  return (
    <div>
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
    </div>
  );
}

function Square({ value , onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}