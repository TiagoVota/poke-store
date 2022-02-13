import styled from 'styled-components'

import TypeButton from '../../shared/pokemons/TypeButton'
import { PokeImg } from '../../../components/PokeImg'


const PokemonContent = ({ pokeInfo: { pokemon, image, types } }) => {
	return (
		<Container>
			<PokeImg src={image} alt={`${pokemon} image`} />

			<DescriptionBox>
				<TypeSpan>Type</TypeSpan>

				<TypesWrapper>
					{types.map((type, index) => <TypeButton key={index} type={type} />)}
				</TypesWrapper>
			</DescriptionBox>
		</Container>
	)
}


export default PokemonContent

const Container = styled.div`
	width: 86vw;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
`

const DescriptionBox = styled.div`
	margin-left: 10px;

	display: flex;
	flex-direction: column;
	justify-content: start;
`

const TypeSpan = styled.span`
	margin: 15px 0;
	font-size: 20px;
	line-height: 25px;
`

const TypesWrapper = styled.div`
	margin-bottom: 15px;
	
	display: flex;
	justify-content: start;
`


