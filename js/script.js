const pokemonName = document.querySelector('.poke_name');
const pokeNumber = document.querySelector('.poke_number');
const pokeImage = document.querySelector('.pokemon');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btPrev = document.querySelector('.butt-prev');
const btNext = document.querySelector('.butt-next');

const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if(apiResponse.status === 200){
        const data = await apiResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) =>{
    pokemonName.innerHTML = 'Loading...';
    pokeNumber.innerHTML = '';
    const data = await fetchPokemon(pokemon);
    if(data)
    {
        pokemonName.innerHTML = data.name;
        pokeNumber.innerHTML = data.id;
        pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
    }
    else{
        pokemonName.innerHTML = 'Not Found';
        pokeNumber.innerHTML = '';
        input.value = '';
    }
}

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    renderPokemon(input.value);
});

renderPokemon('1');