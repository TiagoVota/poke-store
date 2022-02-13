import { useState, createContext } from 'react'

const CartContext = createContext()


const CartProvider = ({ children }) => {
	const mockCart = { products: [] }
	const persistedCart = JSON.parse(localStorage.getItem('cart'))
	const [cart, setCart] = useState(persistedCart || mockCart)

	const updateCart = (cartData) => {
		setCart(cartData)
		localStorage.setItem('cart', JSON.stringify(cartData))
	}


	return (
		<CartContext.Provider value={{ cart, updateCart }}>
			{children}
		</CartContext.Provider>
	)
}


export default CartContext
export {
	CartProvider,
}
