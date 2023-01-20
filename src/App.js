import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/beers" element={<><Header/><AllBeers/></>} />
          <Route path="/beers/:id" element={<><Header/><BeerDetails/></>} />
          <Route path="/new-beer" element={<><Header/><NewBeer/></>} />
          <Route path="/random-beer" element={<><Header/><RandomBeer/></>} />
        </Routes>
    </div>
  );
}

export default App;
