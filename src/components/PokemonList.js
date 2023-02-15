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
            let temp = []
            let names = text.split("\n")
            
            this.setState({
                pokemonList:names
            })
        })
    }

    render(){
        let renderedList = []
        let length = this.state.pokemonList.length
        let pokemonAPI = "https://pokeapi.co/api/v2/pokemon-form/"

        for(let i = 0; i < length; i++){
            let pokemonName = this.state.pokemonList[i]
            let renderedPokemon = <a className = "pokemonLink" href={pokemonAPI + pokemonName.toLowerCase()}>
                                    <PokemonDiv name={pokemonName.toLowerCase()}/>
                                    <h3>{pokemonName}</h3>
                                </a>

            renderedList.push(renderedPokemon)      
        }

        return(
            <div className='list'>
                    {renderedList}
            </div>
        )
    }
}