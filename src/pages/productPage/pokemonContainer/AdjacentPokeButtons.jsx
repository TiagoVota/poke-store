import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5'

import { pokeNumberDisplay } from '../../../helpers/productsHelper'


const AdjacentPokeButtons = ({ adjacentPokemons }) => {
	const { previous, next } = adjacentPokemons
	const navigate = useNavigate()

	const [ mockNumber, mockName ] = [6, 'charizard']

	const handleButtonClick = (type) => {
		const redirectNames = {
			'left': previous?.pokemon?.toLowerCase(),
			'right': next?.pokemon?.toLowerCase(),
		}

		const redirectName = redirectNames[type] || mockName

		navigate(`/products/${redirectName}`)
	}

	return (
		<Container>
			<Button side='left' onClick={() => handleButtonClick('left')}>
				<IoChevronBackCircle size='30px' />

				<NumberSpan>
					{pokeNumberDisplay(previous?.number || mockNumber)}
				</NumberSpan>
			</Button>
			
			<Button side='right' onClick={() => handleButtonClick('right')}>
				<NumberSpan>
					{pokeNumberDisplay(next?.number || mockNumber)}
				</NumberSpan>

				<IoChevronForwardCircle size='30px' />
			</Button>
		</Container>
	)
}


export default AdjacentPokeButtons


const Container = styled.div`
	width: 100vw;
	height: 60px;

	display: flex;
	justify-content: space-between;
`

const Button = styled.button`
	height: 100%;
	width: 49.4%;
	padding-${p => p.side}: 16px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	color: #FFFFFF;

	background-color: #A4A4A4;
`

const NumberSpan = styled.span`
	font-size: 19px;
	line-height: 35px;
	font-weight: bold;
	color: #FFFFFF;
`

