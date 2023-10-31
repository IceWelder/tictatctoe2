"use client"
import React, { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const renderSquare = (i: number) => (
    <button
      className="bg-gray-200 border border-gray-900 w-16 h-16 text-2xl transform transition-transform hover:scale-105 flex items-center justify-center"
      onClick={() => handleClick(i)}
    >
      {squares[i]}
    </button>
  );

  return (
    <div className="p-36">
      <h1 className="text-4xl text-gray-100 text-center  bg-black mb-4 font-extrabold">
        TIC TAC TOE EM <span className="text-purple-600">NEXTJS</span>
      </h1>
      <table className="border-collapse w-48 mx-auto">
        <tbody>
          <tr>
            <td>{renderSquare(0)}</td>
            <td>{renderSquare(1)}</td>
            <td>{renderSquare(2)}</td>
          </tr>
          <tr>
            <td>{renderSquare(3)}</td>
            <td>{renderSquare(4)}</td>
            <td>{renderSquare(5)}</td>
          </tr>
          <tr>
            <td>{renderSquare(6)}</td>
            <td>{renderSquare(7)}</td>
            <td>{renderSquare(8)}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
        <div id="message" className="text-2xl font-bold mb-2">
          {status}
        </div>
        <button
          className="px-4 py-2 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded transition-transform hover:scale-105"
          onClick={() => setSquares(Array(9).fill(null))}
        >
          Reiniciar Partida
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;