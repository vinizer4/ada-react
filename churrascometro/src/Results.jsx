import React from 'react';

function Results({ meat, drinks, onClose }) {
    return (
        <div className="results">
            <p>Total de Carne: {meat}g</p>
            <p>Total de Bebida: {drinks}L</p>
            <button onClick={onClose} className="close-button">Fechar</button>
        </div>
    );
}

export default Results;