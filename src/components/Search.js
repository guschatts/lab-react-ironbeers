import React from 'react';

function Search(props) {
    const handleSearch = event => {
        props.setQuery(event.target.value)
}
return (
    <div>
        <label htmlFor="searchBeer">Search</label>
        <input id="searchBeer" type="text" value={props.query} onChange={handleSearch}/> 
    </div>
);
}

export default Search;