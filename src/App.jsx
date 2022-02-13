import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import PagesRoutes from './Routes'


const App = () => {
	return (
		<AuthProvider>
			<CartProvider>
				<ResetStyleCSS />
				<GlobalStyle />
		
				<PagesRoutes />
			</CartProvider>
		</AuthProvider>
	)
}


export default App
