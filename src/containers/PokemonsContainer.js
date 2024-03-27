import { useEffect, useState } from "react";
import ListOfPokemons from "../components/ListOfPokemons";
const PokemonsContainer = () => {

    const [pokemons, setPokemons] = useState([]);
    
    
    const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const pokemondata = await response.json();

        const fetchPokemon = async (url) => {
            const pokemonResponse = await fetch(url);
                return pokemonResponse.json();
    
        }

        const pokemonRequests = pokemondata.results.map((pokemon) => {
            return fetchPokemon(pokemon.url);
            
        })

        Promise.all(pokemonRequests)
        .then((results) => {
            console.log("results: ", results)
            setPokemons(results)
        }) 
    }
    
    useEffect(() => {
        fetchPokemons();
 
    }, [])
    

    return ( 
        <>
            <h1>POKÉMON</h1>
            <ListOfPokemons pokemons={pokemons}/>
        </>


     );
}
 
export default PokemonsContainer;