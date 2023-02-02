import React from 'react';
import HekkinDiv from './HekkinDiv';
import '../css/pokemonList.css'

export default class PokemonList extends React.Component {

    render(){
        let arr = [];
        for(let i = 0; i < 5; i++){
            arr.push(<a href="https://www.google.com"><HekkinDiv /></a>);
        }

        return(
            <div className='list'>
                {arr}
            </div>
        )
    }
}