import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/pokemon.css'

export default class PokemonDiv extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : props.name,
            image: ""
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/'+this.state.name)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                image:  data["image"]
            })
        })
    }

    render(){
        return(
            <div className='pokemon'>
                <img src= {this.state.image}></img>
            </div>
        )
    }
}