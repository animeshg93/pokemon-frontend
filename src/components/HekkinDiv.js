import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/hekkinDiv.css'

export default class HekkinDiv extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : props.name
        }
    }

    render(){
        return(
            <div className='stupid-div'>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}