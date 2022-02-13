import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { errorModal } from '../../factories/modalFactory'

import pageTitles from '../../utils/pageTitles'

import Container from '../../components/ContainerHome'
import Header from '../shared/header'
import PokemonContainer from './pokemonContainer'
import Footer from '../shared/footer'
import * as api from '../../services/api.pokemons'


const ProductPage = () => {
	const [pokeInfo, setPokeInfo] = useState([])
	const { pokeName } = useParams()
	const location = useLocation()

	const getPokemonsList = () => {
		api.getPokemon({ pokeName })
			.then(({ data }) => setPokeInfo(data))
			.catch(({ response: { data }}) => errorModal(data))
	}
	
	useEffect(getPokemonsList, [location])

	return (
		<Container>
			<Header title={pageTitles['product']} />

			<PokemonContainer pokeInfo={pokeInfo} pokeName={pokeName} />

			<Footer />
		</Container>
	)
}


export default ProductPage
