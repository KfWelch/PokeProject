import { getMoveByName } from "../utilities/api";

export const modifierActions = {
    GET_ABILITY: 'TEAM_MODIFIER_GET_ABILITY',
    GET_EFFORT: 'TEAM_MODIFIER_GET_EFFORT',
    GET_HAPPY: 'TEAM_MODIFIER_GET_HAPPY',
    GET_HEALTH: 'TEAM_MODIFIER_GET_HEALTH',
    GET_INDIVIDUAL: 'TEAM_MODIFIER_GET_INDIVIDUAL',
    GET_LEVEL: 'TEAM_MODIFIER_GET_LEVEL',
    GET_MOVE: 'TEAM_MODIFIER_GET_MOVE',
    GET_NATURE: 'TEAM_MODIFIER_GET_NATURE',
    GET_STATUS: 'TEAM_MODIFIER_GET_STATUS',
    GET_WEATHER: 'TEAM_MODIFIER_GET_WEATHER',
    RESET: 'TEAM_MODIFIER_RESET'
}

export const updateTeamAbility = (ability: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_ABILITY,
        payload: {
            ability:ability
        }
    });
}

export const updateTeamEffort = (effort: number[]) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_EFFORT,
        payload: {
            effort: effort
        }
    });
}

export const updateTeamHappy = (happy: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_HAPPY,
        payload: {
            happy: happy
        }
    });
}

export const updateTeamHealth = (health: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_HEALTH,
        payload: {
            health: health
        }
    });
}

export const updateTeamIndividual = (individual: number[]) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_INDIVIDUAL,
        payload: {
            individual: individual
        }
    });
}

export const updateTeamLevel = (level: number) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_LEVEL,
        payload: {
            level: level
        }
    });
}

export const updateTeamMove = (moveName: string) => async (dispatch: any) => {
    let move: any = await getMoveByName(moveName);
    dispatch({
        type: modifierActions.GET_MOVE,
        payload: {
            move: move
        }
    });
}

export const updateTeamNature = (nature: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_NATURE,
        payload: {
            nature: nature
        }
    });
}

export const updateTeamStatus = (status: string) => (dispatch: any) => {
    dispatch({
        type: modifierActions.GET_STATUS,
        payload: {
            status: status
        }
    });
}

export const updateTeamWeather = (weather: string) => (dispatch: any) => {
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