import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/pokemon.css'

export default class PokemonDiv extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : props.name
        }
    }

    render(){
        return(
            <div className='pokemon'>
                
            </div>
        )
    }
}