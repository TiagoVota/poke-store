import styled from 'styled-components'

import NoPokemon from './NoPokemon'


const PokemonContainer = ({ pokemonInfo, pokeName }) => {

	if (!pokemonInfo.pokemon) return <NoPokemon pokeName={pokeName} />
	return (
		<Container>
			
		</Container>
	)
}


export default PokemonContainer


const Container = styled.div`
	
`

