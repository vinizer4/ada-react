import React from 'react';

function InputGroup({ label, value, setValue }) {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="input-valid"
            />
            {/* Implementar botões + e - aqui, se necessário */}
        </div>
    );
}

export default InputGroup;