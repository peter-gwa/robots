import React from 'react';

const SearchBox = ({ SearchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-light-blue'
            type='search' 
            placeholder='Search robots'
            onChange={SearchChange}
            />
        </div>
    );
}

export default SearchBox;