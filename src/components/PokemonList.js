import React from 'react';
import PokemonDiv from './PokemonDiv';
import '../css/pokemonList.css'
import raw from '../resources/names.txt'

export default class PokemonList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pokemonList: []
        }
    }
    
    componentDidMount(){
        fetch(raw)
        .then(r => r.text())
        .then(text => {          
            this.setState({
                pokemonList:text.split("\n")
            })
        })
    }

    render(){
        let renderedList = []
        let pokemonAPI = "https://pokeapi.co/api/v2/pokemon-form/"

        this.state.pokemonList.forEach((pokemonName) => {
            let renderedPokemon = 
                                <a className = "pokemonLink" href={pokemonAPI + pokemonName.toLowerCase()}>
                                    <PokemonDiv name={pokemonName.toLowerCase()}/>
                                    <h3>{pokemonName}</h3>
                                </a>

            renderedList.push(renderedPokemon)      
        })

        return(
            <div className='list'>
                    {renderedList}
            </div>
        )
    }
}