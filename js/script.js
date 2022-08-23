const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await apiResponse.json();

    return data;
}

fetchPokemon(25);