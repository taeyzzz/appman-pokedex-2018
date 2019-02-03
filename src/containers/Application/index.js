import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ApplicationActions from '../../actions/application'

import Header from '../../components/Header'
import SelectedListPokemon from '../../components/SelectedListPokemon'
import Footer from '../../components/Footer'
import ModalComponent from '../../components/ModalComponent'
import SearchListPokemon from '../../components/SearchListPokemon'

import ApplicationStyled from './styledComponent.js'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class Application extends Component {
  state = {
    selectedPokemon: [],
    showModal: false,
    searchText: ""
  }

  componentDidMount(){
    this.props.loadListPokemon()
  }

  handleAddBtnClicked(){
    this.setState({
      showModal: true
    })
  }

  getAvailablePokemon(){
    const allPokemon = this.props.application.listPokemon.pokemons
    const availablePokemon = allPokemon.filter(pokemon => {
      const foundPokemon = this.state.selectedPokemon.find(selected => selected.id === pokemon.id)
      if(foundPokemon) return false
      else return true
    })
    return availablePokemon.filter(pokemon => pokemon.type.toUpperCase().indexOf(this.state.searchText.toUpperCase()) !== -1 || pokemon.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) !== -1)
  }

  handleSearchPokemon(text){
    this.setState({
      searchText: text
    })
  }

  handleBackgroundClicked(){
    this.setState({
      showModal: false
    })
  }

  handleAddPokemon(pokemonData){
    let addedListPokemon = this.state.selectedPokemon
    addedListPokemon.push(pokemonData)
    this.setState({
      selectedPokemon: addedListPokemon
    })
  }

  getModal(){
    let output = null
    if(this.state.showModal){
      output = (
        <ModalComponent onBackgroundClicked={() => this.handleBackgroundClicked()}>
          <SearchListPokemon
            availablePokemon={this.getAvailablePokemon()}
            onSearchChanged={(queryText) => this.handleSearchPokemon(queryText)}
            onAddPokemon={(pokemonData) => this.handleAddPokemon(pokemonData)}
          />
        </ModalComponent>
      )
    }
    return output
  }

  handleRemovePokemonFromSelectedList(pokemonId){
    const removeSelectedList = this.state.selectedPokemon.filter(pokemon => pokemon.id !== pokemonId)
    this.setState({
      selectedPokemon: removeSelectedList
    })
  }

  render() {
    return (
      <ApplicationStyled className="App">
        <Header title="My Pokedex"/>
        <SelectedListPokemon
          selectedPokemon={this.state.selectedPokemon}
          onDeleteClicked={(pokemonId) => this.handleRemovePokemonFromSelectedList(pokemonId)}
        />
        <Footer onAddBtnClicked={() => this.handleAddBtnClicked()}/>
        {this.getModal()}
      </ApplicationStyled>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
  }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(Object.assign({},  ApplicationActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
