import React, { useState } from 'react';
import NumericInput from './NumericInput';

const NumericInputDemo = () => {
    const [numberIn, setNumberInn] = useState({ value: '' });

    const NumberChange = value => {
        setNumberInn({ value });
    };

    return (
        <div>
            <NumericInput style={{ width: 220 }} value={numberIn.value} NumberChange={NumberChange} />
        </div>
    )
};

export default NumericInputDemo;
