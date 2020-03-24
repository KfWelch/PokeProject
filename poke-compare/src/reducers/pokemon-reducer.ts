import { IPokemonState } from ".";
import { pokemonTypes } from "../action-mappers/pokemon-actions";


const initialState: IPokemonState = {
    myPokemon: null,
    opponent: null
};

export const pokemonReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case pokemonTypes.GET_POKE_API_MY: {
           return {
               ...state,
               myPokemon:action.payload.myPokemon
           }
        }
        case pokemonTypes.GET_POKE_API_OPPONENT: {
            return {
                ...state,
                opponent:action.payload.opponentPokemon
            }
        }
        case pokemonTypes.UNSUCCESSFUL_GET_POKE_API: {
            return state
        } 
        default:
            return state
    }
}