import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import useAuth from '../../../hooks/useAuth'
import useCart from '../../../hooks/useCart'
import * as api from '../../../services/api.pokemons'
import { makeNumbersList, moneyDisplay } from '../../../helpers/productsHelper'
import { errorModal, successModal } from '../../../factories/modalFactory'


const BuyerForm = ({ pokeInfo: { _id: pokeId, pokemon, price }}) => {
	const { auth } = useAuth()
	const { updateCart } = useCart()
	const [pokeQuant, setPokeQuant] = useState('1')
	const navigate = useNavigate()

	const [ MIN_ITENS, MAX_ITENS ] = [1, 12]
	const listQuantItens = makeNumbersList(MIN_ITENS, MAX_ITENS)

	const handleQuantityChange = event => setPokeQuant(event.target.value)

	const handleAddCart = (event) => {
		event.preventDefault()
		const token = auth.token
		api.addPokemonToCart({ token, pokeId, quantity: Number(pokeQuant) })
			.then(({ data: { products } }) => {
				updateCart(products)
				successModal(`Cart successfully updated with ${pokeQuant} ${pokemon}!`)
			})
			.catch(({ response: { status, data }}) => {
				errorModal(data)
				if (status === 401) navigate('/login')
			})
	}

	return (
		<Form onSubmit={handleAddCart}>
			<PriceSpan>{moneyDisplay(price)}</PriceSpan>

			<Select name='quantity' value={pokeQuant} onChange={handleQuantityChange}>
				{listQuantItens.map(num => {
					return (
						<option key={num} value={num}>
							{`Qnt.: ${num}`}
						</option>
					)})}
			</Select>

			<SubmitButton type='submit'>
				Add pokémon to cart!
			</SubmitButton>
		</Form>
	)
}


export default BuyerForm


const Form = styled.form`
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

