import React, { useState, useEffect } from 'react';
import PaginationBar from './PaginationBar';
import { populateRenderedList } from '../util/pokemonListRenderUtil'
import '../css/pokemonList.css'
import raw from '../resources/names.txt'

export default function PokemonList(props) {
    const [pokemonList, setPokemonList] = useState([])
    const [isFetched, setIsFetched] = useState(false)

    useEffect(() => {
        fetch(raw)
            .then(r => r.text())
            .then(text => {
                setPokemonList(text.split("\n"))
                setIsFetched(true)
            })
    }, [])

    let renderedList = []
    populateRenderedList(renderedList, pokemonList)

    return !isFetched ? null : (
        <div className='list'>
            {renderedList}
            <PaginationBar listSize={renderedList.length} />
        </div>
    )
}
