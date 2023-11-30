import React, { useState } from 'react';
import InputGroup from './InputGroup';
import Results from './Results';

function Calculator() {
    const [men, setMen] = useState(0);
    const [women, setWomen] = useState(0);
    const [children, setChildren] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState({ meat: 0, drinks: 0 });

    const calculate = () => {
        const totalMeat = (men * 400) + (women * 300) + (children * 200);
        const totalDrink = (men * 1.5) + (women * 1) + (children * 0.5);

        setResults({ meat: totalMeat, drinks: totalDrink });
        setShowResults(true);
    };

    const handleClose = () => {
        setShowResults(false);
    };

    return (
        <div className="calculator">
            <InputGroup label="Homens" value={men} setValue={setMen} />
            <InputGroup label="Mulheres" value={women} setValue={setWomen} />
            <InputGroup label="Crianças" value={children} setValue={setChildren} />
            <button onClick={calculate} className="default-button">Calcular</button>
            {showResults && <Results meat={results.meat} drinks={results.drinks} onClose={handleClose} />}
        </div>
    );
}

export default Calculator;