import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Footer = () => {
	const navigate = useNavigate()


	return (
		<Container>
			<Title>Poke Store</Title>

			<PageList>
				<PageItem onClick={() => navigate('/login')}>Log in</PageItem>
				<PageItem onClick={() => navigate('/sign-up')}>Sign up</PageItem>
				<PageItem onClick={() => navigate('/')}>Pokemons</PageItem>
				<PageItem onClick={() => navigate('/cart')}>Cart</PageItem>
				<PageItem onClick={() => navigate('/checkout')}>Checkout</PageItem>
			</PageList>
		</Container>
	)
}


export default Footer


const Container = styled.footer`
	width: 100vw;
	height: 30vh;
	padding: 0 10vw;

	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: #1F1F1F;
`

const Title = styled.h2`
	text-shadow: 2px 2px 4px #000000;
	padding: 0 10px 22px;

	font-size: 22px;
	line-height: 28px;
	font-weight: bold;
	color: #FFFFFF;
`

const PageList = styled.ul`
	margin-bottom: 24px;

	font-size: 16px;
	color: #616161;
`

const PageItem = styled.li`
	padding: 2.5px 10px;

	::before {
		margin-right: 7px;

		content: '➤';
	}
`
