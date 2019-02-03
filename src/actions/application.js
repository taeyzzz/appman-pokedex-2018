import { get, post } from '../utils' /*eslint-disable-line */

export const LOAD_LIST_POKEMON_REQUEST = 'LOAD_LIST_POKEMON_REQUEST'
export const LOAD_LIST_POKEMON_SUCCESS = 'LOAD_LIST_POKEMON_SUCCESS'
export const LOAD_LIST_POKEMON_FAILURE = 'LOAD_LIST_POKEMON_FAILURE'
export const LOAD_LIST_POKEMON_IDLE = 'LOAD_LIST_POKEMON_IDLE'

const loadListPokemonRequest = () => {
  return {
    type: LOAD_LIST_POKEMON_REQUEST
  }
}

const loadListPokemonSuccess = ({cards}) => {
  return {
    type: LOAD_LIST_POKEMON_SUCCESS,
    payload: {
      cards
    }
  }
}

const loadListPokemonFailure = (error) => {
  return {
    type: LOAD_LIST_POKEMON_FAILURE,
    payload: {
      error
    }
  }
}

const loadListPokemonIdle = () => {
  return {
    type: LOAD_LIST_POKEMON_IDLE
  }
}

export const loadListPokemon = () => {
  return async (dispatch) => {
    dispatch(loadListPokemonRequest())
    try {
      const response = await get(`/api/cards`)
      dispatch(loadListPokemonSuccess(response))
      dispatch(loadListPokemonIdle())
    }
    catch (err) {
      dispatch(loadListPokemonFailure(err))
      dispatch(loadListPokemonIdle())
    }
  }
}
