import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { makeNumbersList, moneyDisplay } from '../../../helpers/productsHelper'


const BuyerForm = ({ pokeInfo: { _id: pokeId, price }}) => {
	const [pokeQuant, setPokeQuant] = useState('1')
	
	const [ MIN_ITENS, MAX_ITENS ] = [1, 12]
	const listQuantItens = makeNumbersList(MIN_ITENS, MAX_ITENS)

	const handleQuantityChange = event => setPokeQuant(event.target.value)

	return (
		<Form>
			<PriceSpan>{moneyDisplay(price)}</PriceSpan>

			<Select name='quantity' value={pokeQuant} onChange={handleQuantityChange}>
				{listQuantItens.map(num => {
					return (
						<option key={num} value={num}>
							{`Qnt.: ${num}`}
						</option>
					)})}
			</Select>

			<SubmitButton>Add pokémon to cart!</SubmitButton>
		</Form>
	)
}


export default BuyerForm


const Form = styled.div`
	width: 86vw;
	padding: 0 10px;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
`

const PriceSpan = styled.span`
	font-size: 30px;
	line-height: 35px;
	font-weight: bold;
`

const Select = styled.select`
	width: 100px;
	height: 35px;
	padding-left: 5px;

	font-size: 18px;
	line-height: 20px;
	color: #A1A1A1;

	border-radius: 5px;
	background-color: #313131;

	:focus {
		color: #F2F2F2;
	}
`

const SubmitButton = styled.button`
	width: 100%;
	height: 40px;
	margin-top: 15px;

	font-size: 20px;
	line-height: 22px;
	
	border-radius: 5px;
`

