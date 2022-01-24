import React from 'react';

const Square = ({ value, onClick }) => {
    // value will be either X or O depending on which turn is it
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
