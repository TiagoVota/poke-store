import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { moneyDisplay } from '../../../helpers/productsHelper'

import TypeButton from './TypeButton'


const PokemonItem = ({ pokeInfo }) => {
	const { number, pokemon, image, price, types } = pokeInfo
	const navigate = useNavigate()
	
	const handlePokeClick = () => navigate(`/products/${pokemon.toLowerCase()}`)
	
	
	return (
		<Container onClick={handlePokeClick}>
			<PokeImg src={image} alt={`${pokemon} image`} />

			<DescriptionBox>
				<NumberSpan>{`#${number}`}</NumberSpan>
				<NameSpan>{pokemon}</NameSpan>
				

				<TypesWrapper>
					{types.map((type, index) => <TypeButton key={index} type={type} />)}
				</TypesWrapper>

				<PriceSpan>{moneyDisplay(price)}</PriceSpan>
			</DescriptionBox>
		</Container>
	)
}


export default PokemonItem


const Container = styled.div`
	width: 86vw;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
`


const PokeImg = styled.img`
	width: 86vw;
	height: 86vw;

	border-radius: 10px;
	background-color: #F2F2F2;
`

const DescriptionBox = styled.div`
	margin-left: 10px;

	display: flex;
	flex-direction: column;
	justify-content: start;
`

const TypesWrapper = styled.div`
	display: flex;
	justify-content: start;
`

const NumberSpan = styled.span`
	margin-top: 8px;

	font-size: 17px;
	line-height: 20px;
	font-weight: bold;
	color: #919191;
`

const NameSpan = styled.span`
	margin: 12px 0 5px;

	font-size: 22px;
	line-height: 27px;
`

const PriceSpan = styled.span`
	margin: 10px 0;

	font-size: 22px;
	line-height: 27px;
	font-weight: bold;
`
