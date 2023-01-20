import React from 'react';

import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

import { Link} from 'react-router-dom';



function HomePage() {
    return (
        <div className="home-page">
            <div className="section1">
                <img src={beersImg} alt="Beers" />
                <Link to="/beers"> <h1>All Beers</h1> </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

            </div>

            <div className="section2">
                <img src={randomBeerImg} alt="Random-Beer" />
                <Link to="/random-beer"> <h1>Random Beer</h1> </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

            </div>

            <div className="section3">
                <img src={newBeerImg} alt="new-Beer" />
                <Link to="/new-beer"> <h1>New Beer</h1> </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

            </div>
        </div>

        
    )
}

export default HomePage;