import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch,} = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState("Currency (£ Pound)");

    const submitCurrency = (event) => {
      
        const selectedValue = event.target.textContent;
    setSelectedOption(selectedValue);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.getAttribute("value")
        });
    }
    return (
        <div className='alert alert-secondary'>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {selectedOption}
                </button>
                <ul class="dropdown-menu" style={{ backgroundColor: 'green' }}>
                    <li><a class="dropdown-item" href="#" value="$" onClick={submitCurrency}>$ Dollar</a></li>
                    <li><a class="dropdown-item" href="#" value="£" onClick={submitCurrency}>£ Pound</a></li>
                    <li><a class="dropdown-item" href="#" value="€" onClick={submitCurrency}>€ Euro</a></li>
                    <li><a class="dropdown-item" href="#" value="₹" onClick={submitCurrency}>₹ Ruppee</a></li>
                </ul>
            </div>
        </div>
        
    );

};

export default CurrencyDropdown;
