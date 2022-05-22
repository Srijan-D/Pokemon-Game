import React, { Component } from "react";
import "./Pokecard.css";
// const pokemon_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const pokemon_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${pokemon_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="card-title">{this.props.name}</h1>
        <div className="image"><img
          src={imgSrc}
          className="imgSize"
          alt={this.props.name}
          title={this.props.name}
        /></div>
        <div>Type: {this.props.type}</div>
        <div>Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
