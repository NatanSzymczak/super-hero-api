import axios from 'axios';

const ACCESS_TOKEN = 606052730093986;

export const amountOfHeroesInBase = 731;

export const getHero = id => {
  return axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}`);
}

export const searchHeroesByName = name => {
  return axios.get(`https://superheroapi.com/api.php/${ACCESS_TOKEN}/search/${name}`)
}