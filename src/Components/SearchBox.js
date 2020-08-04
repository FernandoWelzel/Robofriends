import React from 'react';

const SearchBox = ({SearchChange}) => {
    return (
        <div height='10vh'>
            <input 
                className='ma3 pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='Search robots'  
                onChange={SearchChange}
            />
        </div>
    )
}

export default SearchBox;