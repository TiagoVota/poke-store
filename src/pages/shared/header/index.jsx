import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './Navbar'


const Header = ({ title }) => {
	const navigate = useNavigate()

	const goToHome = () => navigate('/')
	
	return (
		<Container>
			<Navbar />

			<TitleContainer onClick={goToHome}>
				<Title>{title}</Title>
			</TitleContainer>
		</Container>
	)
}


export default Header


const Container = styled.header`
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
`

const TitleContainer = styled.div`
	width: 100vw;
	padding: 25px 0 16px;
`

const Title = styled.h1`
	padding: 15px 0 0 15px;

	font-size: 30px;
	color: #919191;
`
