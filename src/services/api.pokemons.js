import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const PRODUCTS_URL = `${BASE_URL}/products`

const getPokemons = () => {
	return axios.get(PRODUCTS_URL)
}


const getPokemon = ({ pokeName }) => {
	return axios.get(`${PRODUCTS_URL}/${pokeName}`)
}


const postPokemonToCart = ({ token, pokemonId, quantity }) => {
	const body = { quantity }

	return axios.post(`${PRODUCTS_URL}/${pokemonId}`, body, makeConfig(token))
}


export {
	getPokemons,
	getPokemon,
	postPokemonToCart,
}
