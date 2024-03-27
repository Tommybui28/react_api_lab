import Pokemon from "./Pokemon";
const ListOfPokemons = ({pokemons}) => {
    console.log("pokemons: ", pokemons);

    const pokemonDetails = pokemons.map((pokemon) => {
        return <Pokemon
        key={pokemon.id}
        pokemon={pokemon}
        />
    })
        return (
            <>
            <h3>List of Pokémons</h3>
            <hr />
            {pokemonDetails}
            </>
        ) 
}

export default ListOfPokemons;