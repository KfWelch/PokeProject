import axios from 'axios';

export const pokeApiConfig = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export const apiConfig = axios.create({
    baseURL: 'http://localhost:8080/'
});