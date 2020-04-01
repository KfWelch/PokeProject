import { IModifiersTeamState } from ".";
import { modifierActions } from "../action-mappers/opponent-modifier-actions";

const intitialState: IModifiersTeamState = {
    ability: '',
    effort: [0, 0, 0, 0, 0, 0],
    happy: 0,
    health: 0,
    individual: [0, 0, 0, 0, 0, 0],
    level: 1,
    move: null,
    nature: '',
    status: '',
    weather: ''
};

export const modifiersOpponentReducer = (state = intitialState, action: any) => {
    switch (action.type) {
        case modifierActions.GET_ABILITY: {
            return {
                ...state,
                ability: action.payload.ability
            };
        }
        case modifierActions.GET_EFFORT: {
            return {
                ...state,
                effort: action.payload.effort
            };
        }
        case modifierActions.GET_HAPPY: {
            return {
                ...state,
                happy: action.payload.happy
            };
        }
        case modifierActions.GET_HEALTH: {
            return {
                ...state,
                health: action.payload.health
            };
        }
        case modifierActions.GET_INDIVIDUAL: {
            return {
                ...state,
                individual: action.payload.individual
            };
        }
        case modifierActions.GET_LEVEL: {
            return {
                ...state,
                level: action.payload.level
            };
        }
        case modifierActions.GET_MOVE: {
            return {
                ...state,
                move: action.payload.move
            };
        }
        case modifierActions.GET_NATURE: {
            return {
                ...state,
                nature: action.payload.nature
            };
        }
        case modifierActions.GET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            };
        }
        case modifierActions.GET_WEATHER: {
            return {
                ...state,
                weather: action.payload.weather
            };
        }
        case modifierActions.RESET: {
            return intitialState;
        }
        default: {
            return state;
        }
    }
}