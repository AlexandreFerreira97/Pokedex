const pokemonName = document.querySelector('.poke_name');
const pokeNumber = document.querySelector('.poke_number');
const pokeImage = document.querySelector('.pokemon');

const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await apiResponse.json();

    return data;
}

const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokeNumber.innerHTML = data.id;
}

renderPokemon('25');