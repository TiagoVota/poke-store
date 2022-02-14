import { useState, createContext } from 'react'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
	const mockAuth = { image: 'https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-signup.png', token: 'PokeTrainer' }
	const persistedAuth = JSON.parse(localStorage.getItem('token'))
	const persistedImage = JSON.parse(localStorage.getItem('image'))
	const [token, setToken] = useState(persistedAuth || mockAuth.token)
	const [image, setImage] = useState(persistedImage || mockAuth.image)

	const login = (authData) => {
		setToken(authData.token)
		localStorage.setItem('token', JSON.stringify(authData.token))
		setImage(authData.image)
		localStorage.setItem('image', JSON.stringify(authData.image))
	}


	return (
		<AuthContext.Provider value={{ token, image, login }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
