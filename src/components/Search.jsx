import React, { useState } from 'react';

function Search({cd = Function.prototype}) {
  const [value, setValue] = useState();

  const handleKey = (event) => {
    if(event.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cd(value)
  }


  return (
    <div className='searchStyle'>
      <div className="input-group mb-3">
        <input type="search"
        id='search-field'  
        className="form-control" 
        placeholder="Search"
        value={value}
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Recipient's username" 
        aria-describedby="button-addon2" />
        <button className='btn btn-secondary' onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Search;