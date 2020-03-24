import { getMoveByName } from "../utilities/api";

export const modifierActions = {
    GET_ABILITY: 'OPPONENT_MODIFIER_GET_ABILITY',
    GET_EFFORT: 'OPPONENT_MODIFIER_GET_EFFORT',
    GET_HAPPY: 'OPPONENT_MODIFIER_GET_HAPPY',
    GET_HEALTH: 'OPPONENT_MODIFIER_GET_HEALTH',
    GET_INDIVIDUAL: 'OPPONENT_MODIFIER_GET_INDIVIDUAL',
    GET_LEVEL: 'OPPONENT_MODIFIER_GET_LEVEL',
    GET_MOVE: 'OPPONENT_MODIFIER_GET_MOVE',
    GET_NATURE: 'OPPONENT_MODIFIER_GET_NATURE',
    GET_STATUS: 'OPPONENT_MODIFIER_GET_STATUS',
    GET_WEATHER: 'OPPONENT_MODIFIER_GET_WEATHER',
    RESET: 'OPPONENT_MODIFIER_RESET'
}

export const updateOpponentAbility = (ability: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_ABILITY,
        payload: {
            ability:ability
        }
    });
}

export const updateOpponentEffort = (effort: number[]) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_EFFORT,
        payload: {
            effort: effort
        }
    });
}

export const updateOpponentHappy = (happy: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_HAPPY,
        payload: {
            happy: happy
        }
    });
}

export const updateOpponentHealth = (health: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_HEALTH,
        payload: {
            health: health
        }
    });
}

export const updateOpponentIndividual = (individual: number[]) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_INDIVIDUAL,
        payload: {
            individual: individual
        }
    });
}

export const updateOpponentLevel = (level: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_LEVEL,
        payload: {
            level: level
        }
    });
}

export const updateOpponentMove = (moveName: string) => async (dispatch: any) => {
    let move: any = await getMoveByName(moveName);
    dispatch({
        type: modifierActions.GET_MOVE,
        payload: {
            move: move
        }
    });
}

export const updateOpponentNature = (nature: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_NATURE,
        payload: {
            nature: nature
        }
    });
}

export const updateOpponentStatus = (status: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_STATUS,
        payload: {
            status: status
        }
    });
}

export const updateOpponentWeather = (weather: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_WEATHER,
        payload: {
            weather: weather
        }
    });
}

export const reset = () => (dispatch: any) => {
    dispatch({
        type: modifierActions.RESET
    })
}