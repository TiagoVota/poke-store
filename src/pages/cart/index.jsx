import { useState, useEffect } from 'react'
import { errorModal } from '../../factories/modalFactory'
import useCart from '../../hooks/useCart'
import useAuth from '../../hooks/useAuth'
import * as api from '../../services/api.pokemons'
import Container from '../../components/Container'


import axios from 'axios'
import { makeConfig } from '../../helpers/configHelper'
import BASE_URL from '../../services/baseUrl'
import Header from '../shared/header'
import Footer from '../shared/footer'
import pageTitles from '../../utils/pageTitles'
import PokemonContainer from './pokemonContainer'


const Cart = () => {
	const { cart } = useCart()
	const { token } = useAuth()
	
	const [cartItems, setCartItems] = useState([])
	
	useEffect(() => {
		let arrayOfIds = []
		for(let i = 0; i < cart.length; i++){
			arrayOfIds.push(cart[i].product_id)
		}
		const promise = axios.get(`${BASE_URL}/cart`, makeConfig(token))
		promise.then((res) => {setCartItems(res.data); console.log(res.data)}, (e) => console.log(e))
	}, [])

	return (
		<Container>
			<Header title={pageTitles['cart']}/>
			<PokemonContainer haveCart={cartItems}/>
			<Footer/>
		</Container>
	)
}


export default Cart
