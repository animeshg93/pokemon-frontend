import React, { useState } from 'react';
import '../css/pokemon.css'

export default function PokemonDiv (props) {
    const [name, setName] = useState(props.name);
    const [image, setImage] = useState("")

    fetch('http://localhost:5000/'+name)
    .then(resp => {
        if(resp.status >= 400){
            throw new Error("Server did not respond")
        }
        return resp.json();
    })
    .then(data => setImage(data["image"]))
    

    return(
        <div className='pokemon'>
            <img src= {image}></img>
        </div>
    )
}