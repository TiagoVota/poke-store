import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import {
	Login,
	SignUp,
	Home,
	ProductPage,
	Cart,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/' element={<Home />} />
				<Route path='/products/:pokeName' element={<ProductPage />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</Router>
	)
}


export default PagesRoutes
