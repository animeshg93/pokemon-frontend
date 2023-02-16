import React from 'react';
import '../css/pagination.css'

export default class Pagination extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listSize: props.listSize
        }
    }

    render(){
        let itemCount = 10
        let paginationNumbers = Math.ceil(this.state.listSize/itemCount)
        let paginationArr = Array.from(Array(paginationNumbers), (_, idx) => idx+1)
        let renderedList = []

        paginationArr.forEach(item => {
            renderedList.push(<h3 className='number'>{item}</h3>)
        })

        return(
            <div className='pagination'>
                {renderedList}     
            </div>
        )
    }
}