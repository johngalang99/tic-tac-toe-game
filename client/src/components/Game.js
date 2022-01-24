import React, { useState } from 'react';
import { calculateWinner } from '../winner';
import Board from './Board';

const Game = () => {
    // if win is not equal to null, there will be a winner.
    const [win, setWin] = useState(null);

    // create an array with 9 nulls, there 9 nulls will be the squares
    const [history, setHistory] = useState([Array(9).fill(null)]);

    // step number zero to 9
    const [stepNumber, setStepNumber] = useState(0);

    // for alternate O and X turn
    const [xIsNext, setXIsNext] = useState(true);

    // if xIsNext is true, X will be the value of xO and vice versa
    const xO = xIsNext ? 'X' : 'O';

    // function to check whether there is a winner
    const winner = calculateWinner(history[stepNumber]);

    // using useState hook to get value of promise
    winner.then((win) => setWin(win));

    // function everytime a square is clicked. this will be passed down as props as well.
    const handleClick = (i) => {
        const squares = [...history[stepNumber]];
        // if square is already clicked or there is a winner, function will stop here.
        if (win || squares[i]) return;

        // assign value of square to xO
        squares[i] = xO;
        // modify array according to clicked square.
        setHistory([...history, squares]);
        // +1 step number
        setStepNumber(history.length);
        // change shape for next turn
        setXIsNext(!xIsNext);
    };

    // Function to restart the game
    const resetGame = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
    };

    return (
        <>
            <div className="wrapper">
                <div>
                    <h1>React Tic-Tac-Toe</h1>
                    <Board
                        // Passing squares and onClick function as props
                        squares={history[stepNumber]}
                        onClick={handleClick}
                    />
                </div>
                <div className="status">
                    {/* Conditional rendering for who is the next player, if it's a draw, and if someone won */}
                    <h3>{win ? `Winner:  ${win}` : `Next Player: ${xO}`}</h3>
                    <h3>{stepNumber === 9 && !win && `Draw`}</h3>
                    {(win || stepNumber === 9) && (
                        <button className="reset" onClick={resetGame}>
                            Restart Game
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Game;
