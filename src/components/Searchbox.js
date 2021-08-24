import React from 'react';
import './Searchbox.css';

const Searchbox=({onSearchChange})=>{
    return(
        <input className='b--green bg-lightest-blue ba pa3 br3 ' 
        type='search' placeholder='search robots' onChange={onSearchChange}/>
    );
}

export default Searchbox