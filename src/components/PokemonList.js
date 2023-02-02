import React from 'react';
import HekkinDiv from './HekkinDiv';
import '../css/pokemonList.css'

export default class PokemonList extends React.Component {

    render(){
        let arr = [];
        let names = ['eevee', 'meowth', 'flareon', 'jolteon']
        for(let i = 0; i < names.length; i++){
            let url = "https://pokeapi.co/api/v2/pokemon-form/" + names[i];
            arr.push(<a href={url}><HekkinDiv /></a>);
        }

        return(
            <div className='list'>
                {arr}
            </div>
        )
    }
}