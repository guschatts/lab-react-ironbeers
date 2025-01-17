import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                setRandomBeer(response.data)
                
            })
    }, [])
    return (
        <div key={randomBeer._id}>
            <img src={randomBeer.image_url} alt="beer" height="300"  />
            <div>
                <ul>
                    <h3>{randomBeer.name}</h3>
                    <h4>{randomBeer.tagline}</h4>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p><b>Created by:</b>{randomBeer.name}</p>
                </ul>
            </div>
        </div>
    );
}

export default RandomBeer;