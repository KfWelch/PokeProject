import axios from 'axios';
import { apiConfig, pokeApiConfig } from './apiConfig';

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

export const setFolder = async (folder: string, folderPath: string) => {
    try {
        const response = await apiConfig.post(`folders/set/${folder}`, {}, { params: { path: folderPath }});
        return response.data;
    } catch {
        console.log('Err:  Something bad happened');
        return false;
    }
};

export const cleanup = async (gameTitle: string, fileType: string, outputFolder: string) => {
    try {
        const response = await apiConfig.get(`organize/cleanup/${gameTitle}/${fileType}/${outputFolder}`);
        return response.data;
    } catch {
        console.log('Err: something bad happened');
        return '';
    }
};

export const getDurationByGame = async (gameTitle: string, fileType: string) => {
    try {
        const response = await apiConfig.get(`lengths/duration/filter/${gameTitle}/${fileType}`);
        return response.data;
    } catch {
        console.log('Err: something bad happened');
        return '';
    }
};
