import React from 'react';
import HekkinDiv from './HekkinDiv';
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

            for(let i = 0; i < names.length; i++){
                let url = "https://pokeapi.co/api/v2/pokemon-form/" + names[i].toLowerCase()
                temp.push(<a href={url}><HekkinDiv name={names[i]}/></a>)
            }
            
            this.setState({
                pokemonList:temp
            })
        })
    }

    render(){
        return(
            <div className='list'>
                    {this.state.pokemonList}
            </div>
        )
    }
}