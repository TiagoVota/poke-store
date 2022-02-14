import styled from 'styled-components'

import NoPokemons from './NoPokemons'
import PokemonItem from './PokemonItem'


const PokemonsContainer = ({ pokemonsList }) => {

	if (pokemonsList.length === 0) return <NoPokemons />
	
	return (
		<Container>
			{
				pokemonsList.map((pokeInfo, index) => <PokemonItem
					key={index}
					pokeInfo={pokeInfo}
				/>)
			}
		</Container>
	)
}


export default PokemonsContainer


const Container = styled.div`
	width: 100vw;
	padding: 16px 5vw;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	@media (min-width: 900px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`
