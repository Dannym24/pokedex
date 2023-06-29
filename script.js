
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const pokemonInfo = document.getElementById('pokemonInfo');

searchButton.addEventListener('click', () => {
  const pokemonName = searchInput.value.toLowerCase();
  getPokemonData(pokemonName);
  
});

async function getPokemonData(pokemonName) {
  pokemonInfo.innerHTML = 'Cargando...';

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    const pokemonHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height} dm</p>
      <p>Peso: ${data.weight} hg</p>
    `;

    pokemonInfo.innerHTML = pokemonHTML;
  } catch (error) {
    pokemonInfo.innerHTML = 'Pokémon no encontrado.';
  }
}


