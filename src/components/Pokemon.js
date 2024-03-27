const Pokemon = ({pokemon}) => {
    
    const capitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const abilities = pokemon.abilities.map((ability) =>{
        return <li>{ capitalise(ability.ability.name) }</li>
    })

    const types = pokemon.types.map((type) => {
        return <li> { capitalise(type.type.name) }</li>
    })
    
    
    return ( 
        <>
                <img src ={ pokemon.sprites.front_default}/>
                    
                <h3>Name: {capitalise(pokemon.name)}</h3>

                <li>Type:
                    <ul>
                    {types}    
                    </ul>    
                 </li>
                <li>Abilities: 
                    <ul>{abilities}
                    </ul>
                </li>
                <hr/>
        </>
    
     );
}
 
export default Pokemon;