import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import useAuth from '../../../hooks/useAuth'
import useCart from '../../../hooks/useCart'
import * as api from '../../../services/api.order'
import { moneyDisplay } from '../../../helpers/productsHelper'
import { errorModal, successModal } from '../../../factories/modalFactory'

import NoPokemon from './NoPokemon'
import PokemonItem from './PokemonItem'


const PokemonContainer = ({ haveCart }) => {
	const { cart: { products }, updateCart } = useCart()
	const { auth: { token } } = useAuth()
	const navigate = useNavigate()

	console.log({ products, haveCart })

	if (products.length === 0) return <NoPokemon />

	const cartInfo = haveCart.map((apiInfo, index) => {
		return {
			...apiInfo,
			quantity: products[index].quantity
		}
	})

	const sumItens = (total, { price, quantity }) => total + price * quantity
	const total = cartInfo.reduce(sumItens, 0)

	const handleFinalizeOrder = () => {
		api.postOrder({ token })
			.then(({ data }) => {
				successModal('Order finalized successfully!')
				updateCart({ products: [] })
				navigate('/')
			})
			.catch(({ response: { data }}) => errorModal(data))
	}

	return (
		<Container>
			<PokeContainer>

				{cartInfo.map(item => <PokemonItem key={item._id} pokeInfo={item}/>)}
			</PokeContainer>
			
			<TotalSpan>{`Total: ${moneyDisplay(total)}`}</TotalSpan>

			<CheckoutButton onClick={handleFinalizeOrder}>
				Make checkout
			</CheckoutButton>
		</Container>
	)
}


export default PokemonContainer


const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`

const PokeContainer = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	
	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`


const TotalSpan = styled.span`
	margin-bottom: 25px;
	
	font-size: 30px;
	line-height: 35px;
	font-weight: bold;
	letter-spacing: 1px;
`

const CheckoutButton = styled.button`
	width: 180px;
	height: 70px;
	margin-bottom: 50px;

	font-size: 20px;
	font-weight: bold;
	color: #FFFFFF;

	border-radius: 10px;
	background-color: #313131;
`
