import axios from 'axios';

export const amountOfHeroesInBase = 731;

export const getHero = id => {
  return axios.get(`https://www.superheroapi.com/api.php/606052730093986/${id}`);
}