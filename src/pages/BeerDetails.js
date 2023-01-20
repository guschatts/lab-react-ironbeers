import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function BeerDetails() {
    const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then(response => {setBeer(response.data);
      });
   
  }, [id]);

    return (
        <>
        <h1>Beer Details</h1>
        <div>
            
             <img src={beer.image_url} alt="beer" height="300" />
            <div>
                <ul>
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <p>{beer.first_brewed}</p>
                  <p>{beer.attenuation_level}</p>
                  <p>{beer.description}</p>
                  <p> Created by {beer.contributed_by}</p>

                </ul>
            </div> 
            
        </div>
        </>
    )

    
}
export default BeerDetails;