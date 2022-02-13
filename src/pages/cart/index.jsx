import useCart from '../../hooks/useCart'

import Container from '../../components/Container'


const Cart = () => {
	const { cart } = useCart()
	console.log({ cart })
	
	return (
		<Container>
			
		</Container>
	)
}


export default Cart
