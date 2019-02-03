import {
  LOAD_LIST_POKEMON_REQUEST,
  LOAD_LIST_POKEMON_SUCCESS,
  LOAD_LIST_POKEMON_FAILURE,
  LOAD_LIST_POKEMON_IDLE,
} from '../actions/application'

const initialState = {
  listPokemon: {
    fetchStatus: "idle",
    pokemons: []
  }
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_POKEMON_REQUEST: {
      return Object.assign({}, state, {
        listPokemon: Object.assign({}, state.listPokemon, {
          fetchStatus: 'request'
        })
      })
    }
    case LOAD_LIST_POKEMON_SUCCESS: {
      return Object.assign({}, state, {
        listPokemon: Object.assign({}, state.listPokemon, {
          fetchStatus: 'success',
          pokemons: action.payload.cards
        })
      })
    }
    case LOAD_LIST_POKEMON_FAILURE: {
      return Object.assign({}, state, {
        listPokemon: Object.assign({}, state.listPokemon, {
          fetchStatus: 'failure',
          error: action.payload.error
        })
      })
    }
    case LOAD_LIST_POKEMON_IDLE: {
      return Object.assign({}, state, {
        listPokemon: Object.assign({}, state.listPokemon, {
          fetchStatus: 'idle'
        })
      })
    }
    default: {
      return state
    }
  }
}

export default application
