import React, { useState } from 'react';
import '../css/pagination.css'

export default function PaginationBar(props) {
        const [listSize, setListSize] = useState(props.listSize);
    
        let itemCount = 10
        let paginationNumbers = Math.ceil(listSize/itemCount)
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
