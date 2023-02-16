import React from 'react';
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
        .then(resp => {
            if(resp.status >= 400){
                throw new Error("Server did not respond")
            }
            return resp.json();
        })
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