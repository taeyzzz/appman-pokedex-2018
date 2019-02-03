import React, { Component } from 'react'
import PokemonCard from '../PokemonCard'

import SelectedListPokemonStyled from './styledComponent.js'

export default class SelectedListPokemon extends Component {
  getListPokemonCards(){
    let list = null
    if(this.props.selectedPokemon.length > 0){
      list = this.props.selectedPokemon.map(pokemon => <PokemonCard key={pokemon.id} mode="half" pokemonData={pokemon} onDeleteClicked={() => this.props.onDeleteClicked(pokemon.id)} btnText="X"/>)
    }
    return list
  }

  render() {
    return (
      <SelectedListPokemonStyled>
        {this.getListPokemonCards()}
      </SelectedListPokemonStyled>
    )
  }
}
