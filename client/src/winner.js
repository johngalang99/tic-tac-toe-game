import { getLines } from './lines';

// Add logic to check whether there is already a winner when squares match a winning combination.
export const calculateWinner = async (squares) => {
    const lines = await getLines();
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
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
