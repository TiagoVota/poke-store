import { useState, useEffect } from 'react'

import * as api from '../../services/api.pokemons'
import { errorModal } from '../../factories/modalFactory'

import pageTitles from '../../utils/pageTitles'

import Container from '../../components/ContainerHome'
import Header from '../shared/header'
import FilterContainer from './filterContainer/FilterContainer'
import PokemonsContainer from './pokemonsContainer'
import Footer from '../shared/footer'


const Home = () => {
	const [pokemonsList, setPokemonsList] = useState([])

	
	const getPokemonsList = () => {
		api.getPokemons()
			.then(({ data }) => setPokemonsList(data))
			.catch(({ error }) => errorModal(error))
	}
	
	useEffect(getPokemonsList, [])
	
	return (
		<Container>
			<Header title={pageTitles['home']} />

			<FilterContainer />
			
			<PokemonsContainer pokemonsList={pokemonsList} />

			<Footer />
		</Container>
	)
}


export default Home
