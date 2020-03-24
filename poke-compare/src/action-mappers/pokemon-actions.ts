import { getPokeByName } from "../utilities/api"

export const pokemonTypes = {
    GET_POKE_API_MY: 'POKEMON_GET_POKE_API_MY',
    GET_POKE_API_OPPONENT: 'POKEMON_GET_POKE_API_OPPONENT',
    UNSUCCESSFUL_GET_POKE_API: 'POKEMON_UNSUCCSSFUL_GET_POKEMON_API'
}


export const getMyPokemon = (name: string) => async (dispatch: any) => {
    try {
        let pokemon = await getPokeByName(name);

        dispatch({
            type:pokemonTypes.GET_POKE_API_MY,//what should the reducer do
            payload:{//the new data for the store
                myPokemon:pokemon
            }
        })
    } catch (e) {
        dispatch({
            type:pokemonTypes.UNSUCCESSFUL_GET_POKE_API
        })
    }
}

export const getOpponentPokemon = (name: string) => async (dispatch: any) => {
    try {
        let pokemon = await getPokeByName(name);

        dispatch({
            type:pokemonTypes.GET_POKE_API_OPPONENT,//what should the reducer do
            payload:{//the new data for the store
                opponentPokemon:pokemon
            }
        })
    } catch (e) {
        dispatch({
            type:pokemonTypes.UNSUCCESSFUL_GET_POKE_API
        })
    }
}