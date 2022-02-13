import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const PRODUCTS_URL = `${BASE_URL}/products`

const getPokemons = () => {
	return axios.get(PRODUCTS_URL)
}


const getPokemon = ({ pokeName, pokeId }) => {
	return axios.get(`${PRODUCTS_URL}/${pokeName || pokeId}`)
}


const addPokemonToCart = ({ token, pokeId, quantity }) => {
	const body = { quantity }

	return axios.put(`${PRODUCTS_URL}/${pokeId}`, body, makeConfig(token))
}


export {
	getPokemons,
	getPokemon,
	addPokemonToCart,
}
