import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon-reducer";
import { modifiersTeamReducer } from "./modifiers-team-reducer";
import { modifiersOpponentReducer } from "./modifiers-opponent-reducer";

export interface IPokemonState {
    myPokemon: any,
    opponent: any
}


export interface IModifiersTeamState {
    ability: string,
    effort: number [],
    happy: number,
    health: number,
    individual: number [],
    level: number,
    move: any,
    nature: string,
    status: string,
    weather: string
}

export interface IModifiersOpponentState {
    ability: string,
    effort: number [],
    happy: number,
    health: number,
    individual: number [],
    level: number,
    move: any,
    nature: string,
    status: string,
    weather: string
}

export interface IState {
    pokemonState: IPokemonState,
    modifiersTeamState: IModifiersTeamState,
    modifiersOpponentState: IModifiersOpponentState
}

export const state = combineReducers<IState> ({
    pokemonState:pokemonReducer,
    modifiersTeamState: modifiersTeamReducer,
    modifiersOpponentState: modifiersOpponentReducer
})