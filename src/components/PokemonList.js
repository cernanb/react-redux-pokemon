import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../redux/actions/pokemonActions";
import { PokemonCard } from "./PokemonCard";

class PokemonList extends Component {
  componentDidMount() {
    fetchPokemon(this.props.page);
  }
  render() {
    return (
      <>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {this.props.pokemon.map((p) => (
            <PokemonCard index={p.id} pokemon={p} />
          ))}
        </div>
        <div>
          <button className="rounded-md p-4 mt-4 text-white bg-green-500">
            Load More
          </button>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({ page: state.pokemon.page, pokemon: state.pokemon.all }),
  {
    getPokemon: fetchPokemon,
  }
)(PokemonList);
