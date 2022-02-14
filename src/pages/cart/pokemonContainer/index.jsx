import styled from 'styled-components'


import NoPokemon from './NoPokemon'



const PokemonContainer = ({ haveCart }) => {

	if (!haveCart) return <NoPokemon />
	return (
		<Container>
			{haveCart.map(item => {
				
			})}
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

