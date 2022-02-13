import styled from 'styled-components'


import NoPokemon from './NoPokemon'
import AdjacentPokeButtons from './AdjacentPokeButtons'
import PokemonContent from './PokemonContent'
import PokeName from './PokeName'
import BuyerForm from './BuyerForm'


const PokemonContainer = ({ pokeInfo, pokeName }) => {
	const { pokemon, adjacentPokemons } = pokeInfo


	if (!pokemon) return <NoPokemon pokeName={pokeName} />
	return (
		<Container>
			<AdjacentPokeButtons adjacentPokemons={adjacentPokemons}/>

			<PokeName pokeInfo={pokeInfo} />

			<PokemonContent pokeInfo={pokeInfo}/>

			<BuyerForm pokeInfo={pokeInfo}/>
		</Container>
	)
}


export default PokemonContainer


const Container = styled.div`
	width: 100vw;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`

