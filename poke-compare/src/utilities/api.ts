import axios from 'axios';
import { pokeApiConfig } from './apiConfig';

export const getPokeByName = async (name: string) => {
    try {
        const response = await pokeApiConfig.get('pokemon/' + name);
        return response.data;
    } catch {
        console.log('Err:  MissingNo');
        return null;
    }
}

export const getMoveByName = async (moveName: string) => {
    try {
        const response = await pokeApiConfig.get('move/' + moveName);
        return response.data;
    } catch {
        console.log('Err:  Missing');
        return null;
    }
}

export const getAbilityByName = async (abilityName: string) => {
    try {
        const response = await pokeApiConfig.get('ability/' + abilityName);
        return response.data;
    } catch {
        console.log('Err:  Missing');
        return null;
    }
}