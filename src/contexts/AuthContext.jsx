import { useState, createContext } from 'react'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
	const mockAuth = { 
		image: 'https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-signup.png',
		token: 'PokeTrainer' 
	}
	const persistedAuth = JSON.parse(localStorage.getItem('auth'))
	const [auth, setAuth] = useState(persistedAuth || mockAuth)

	const login = (authData) => {
		setAuth(authData)
		localStorage.setItem('auth', JSON.stringify(authData))
	}


	return (
		<AuthContext.Provider value={{ auth, login }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
