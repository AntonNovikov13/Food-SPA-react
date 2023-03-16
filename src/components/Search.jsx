import React, { useState } from 'react';

const Search = (props) => {
    const { searchMeals = Function.prototype } = props;

    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        searchMeals(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    className='validate'
                    placeholder='Search meal'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className='btn search-btn'
                    style={{ position: 'absolute', top: 0, right: 10 }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export { Search };
