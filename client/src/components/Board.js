import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
    return (
        <div className="board">
            {/* Map through the squares, the initial array of 9 nulls from Game.js */}
            {squares.map((square, i) => (
                // Pass value and onClick as props again
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    );
};

export default Board;
