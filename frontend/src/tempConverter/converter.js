import React, { useState } from 'react';
import "./converter.css";
const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('Celsius');
    const [convertedTemp, setConvertedTemp] = useState(null);

    const handleConvert = () => {
        if (!isNaN(temperature)) {
            let temp = parseFloat(temperature);
            if (unit === 'Celsius') {
                setConvertedTemp({ value: (temp * 9/5) + 32, unit: 'Fahrenheit' });
            } else {
                setConvertedTemp({ value: (temp - 32) * 5/9, unit: 'Celsius' });
            }
        } else {
            alert('Please enter a valid number');
        }
    };

    return (
        <div className='cov_con'>
        <div style={{ textAlign: 'center', padding: '20px' }}
                className='in_cov'>
            <h2>Temperature Converter</h2>
            <input
                type="text"
                placeholder="Enter temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
            <select onChange={(e) => setUnit(e.target.value)} value={unit}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
            </select>
            <button className="con_button"onClick={handleConvert}>Convert</button>
            {convertedTemp && (
                <p>Converted Temperature: {convertedTemp.value.toFixed(2)}° {convertedTemp.unit}</p>
            )}
        </div>
        </div>
    );
};

export default TemperatureConverter;
