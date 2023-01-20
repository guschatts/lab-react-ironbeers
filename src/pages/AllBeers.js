import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
// import Header from './components/Header';

function AllBeers() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(response => setBeers(response.data));
    }, []);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + query)
        .then(response => setBeers(response.data))
    }, [query]);

    return (
        <div>
            <h1>Beers List</h1>
            
            <Search query={query} setQuery={setQuery} />
            <div>
                {beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt="beer" height="100"  />
                        </Link>
                        <div>
                          <ul>
                            <h3>{beer.name}</h3>
                            <h4>{beer.tagline}</h4>
                            <p> Created by {beer.contributed_by}</p>
                          </ul>
                        </div>  
                    </div> 
                    )
                })}
            </div>
        </div>
    );

}
export default AllBeers;