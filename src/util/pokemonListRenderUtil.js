import PokemonDiv from '../components/PokemonDiv'

export function populateRenderedList(renderedList, pokemonList){
    let pokemonAPI = "https://pokeapi.co/api/v2/pokemon-form/"
    
    pokemonList.forEach(pokemonName => {
        let renderedPokemon = 
                             <a className = "pokemonLink" href={pokemonAPI + pokemonName.toLowerCase()}>
                                <PokemonDiv name={pokemonName.toLowerCase()}/>
                                <h3>{pokemonName}</h3>
                            </a>
    
        renderedList.push(renderedPokemon)      
    })
} 

export function paginatedList(pokemonList, paginatedList, paginationCount, pageNumber) {
    
}