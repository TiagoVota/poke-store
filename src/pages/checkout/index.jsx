import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import * as api from '../../services/api.order'
import { errorModal, successModal } from '../../factories/modalFactory'

import pageTitles from '../../utils/pageTitles'

import Container from '../../components/ContainerHome'
import Header from '../shared/header'
// import PokemonsContainer from './pokemonsContainer'
import Footer from '../shared/footer'


const Checkout = ({ orderInfoo }) => {
	const { products, finalizeDate } = orderInfoo
	const [orderInfo, setOrderInfo] = useState({})
	const navigate = useNavigate()
	const { auth: { token } } = useAuth()

	const handleFinalizeOrder = () => {
		api.postOrder({ token })
			.then(({ data }) => {
				setOrderInfo(data)
				successModal('Order finalized successfully!')
				navigate('/')
			})
			.catch(({ response: { data }}) => errorModal(data))
	}

	return (
		<Container>
			<Header title={pageTitles['checkout']} />

			{/* <PokemonsContainer pokemonsList={products} /> */}

			<Footer />
		</Container>
	)
}


export default Checkout
