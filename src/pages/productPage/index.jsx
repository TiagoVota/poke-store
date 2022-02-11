import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { errorModal } from '../../factories/modalFactory'

import pageTitles from '../../utils/pageTitles'

import Container from '../../components/ContainerHome'
import Header from '../shared/header'
import PokemonContainer from './pokemonContainer'
import Footer from '../shared/footer'
import * as api from '../../services/api.pokemons'


const ProductPage = () => {
	const [pokemonInfo, setPokemonInfo] = useState([])
	const { pokeName } = useParams()

	const getPokemonsList = () => {
		api.getPokemon({ pokeName })
			.then(({ data }) => setPokemonInfo(data))
			.catch(({ error }) => errorModal(error))
	}
	
	useEffect(getPokemonsList, [])

	console.log({ pokeName, pokemonInfo })
	return (
		<Container>
			<Header title={pageTitles['product']} />

			<PokemonContainer pokemonInfo={pokemonInfo} />

			<Footer />
		</Container>
	)
}


export default ProductPage
