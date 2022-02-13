import styled from 'styled-components'

import { pokeNumberDisplay } from '../../../helpers/productsHelper'


const PokeName = ({ pokeInfo: { pokemon, number } }) => {
	return (
		<Container>
			{`${pokemon}`} <NumberSpan>{`${pokeNumberDisplay(number)}`}</NumberSpan>
		</Container>
	)
}


export default PokeName


const Container = styled.div`
	width: 100vw;
	height: 52px;
	margin-bottom: 16px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 28px;
	line-height: 30px;
	color: #212121;
`

const NumberSpan = styled.span`
	margin-left: 10px;
	color: #616161;
`


