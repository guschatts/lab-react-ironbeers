import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



function NewBeer(){

const [name, setName] = useState("")
const [tagline, setTagline] = useState("")
const [description, setDescription] = useState("")
const [first_brewed, setFirstBrewed] = useState("")
const [brewers_type, setBrewersType] = useState("")
const [attentuation_level, setAttentuationLevel] = useState("")
const [contributed_by, setContributedBy] = useState("")

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()

    const newBeer = {name, tagline, description, first_brewed, brewers_type, attentuation_level, contributed_by}

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(() => {
            navigate("/");
        })
}
    return (
<div>

        <h3>Add New Beer</h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            <br/>
            <label>Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={(event) => setTagline(event.target.value)} />
            <br/>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={(event)=> setDescription(event.target.value)} />
            <br/>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={first_brewed} onChange={(event)=> setFirstBrewed(event.target.value)} />
            <br/>
            <label>Brewers Type</label>
            <input type="text" name="brewers_type" value={brewers_type} onChange={(event)=> setBrewersType(event.target.value)} />
            <br/>
            <label>Attentuation Level</label>
            <input type="number" name="attentuation_level" value={attentuation_level} onChange={(event)=> setAttentuationLevel(Number(event.target.value))} />
            <br/>
            <label>Contributed by</label>
            <input type="text" name="contributed_by" value={contributed_by} onChange={(event)=> setContributedBy(event.target.value)} />


            <button type="submit">Add new beer</button>
        </form>
      </div>
    )
}

export default NewBeer