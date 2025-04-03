interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonList: Pokemon[];
  setPokemonName: (name: string) => void;
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon: Pokemon) => (
        <button type="button" key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}> {pokemon.name} </button>
      ))}
    </nav>)
}

export default NavBar;