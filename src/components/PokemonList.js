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
        let render = []
        let temp = this.state.pokemonList
        let pokemonAPI = "https://pokeapi.co/api/v2/pokemon-form/"

        for(let i = 0; i < temp.length; i++){
            let pokemonName = temp[i]
            render.push(
                    <a className = "pokemonLink" href={pokemonAPI + pokemonName.toLowerCase()}>
                        <PokemonDiv name={pokemonName}/>
                        <h3>{pokemonName}</h3>
                    </a>
               )
        }

        return(
            <div className='list'>
                    {render}
            </div>
        )
    }
}