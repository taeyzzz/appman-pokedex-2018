import React, { Component } from 'react'
import PokemonCard from '../PokemonCard'
import SearchInput from '../SearchInput'

import SearchListPokemonStyled from './styledComponent.js'

export default class SearchListPokemon extends Component {
  getListPokemonCards(){
    let list = null
    if(this.props.availablePokemon.length > 0){
      list = this.props.availablePokemon.map(pokemon => <PokemonCard key={pokemon.id} mode="full" pokemonData={pokemon} onDeleteClicked={() => this.props.onAddPokemon(pokemon)} btnText="Add"/>)
    }
    return list
  }

  render() {
    return (
      <SearchListPokemonStyled onClick={(e) => e.stopPropagation()}>
        <SearchInput onChange={(text) => this.props.onSearchChanged(text)}/>
        {this.getListPokemonCards()}
      </SearchListPokemonStyled>
    )
  }
}
