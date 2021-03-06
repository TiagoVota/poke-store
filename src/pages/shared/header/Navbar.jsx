import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoCart } from 'react-icons/io5'

import useAuth from '../../../hooks/useAuth'

import signUpImg from '../../../assets/profile-nav-signup.png'


function Navbar() {
	const { auth: { image } } = useAuth()
	const navigate = useNavigate()

	const goCart = () => navigate('/cart')
	const goLogin = () => navigate('/login')


	return (
		<Container>
			<NavButton onClick={goCart}>
				<IoCart size='45px' />
			</NavButton>

			<ProfileButton onClick={goLogin}>
				<img src={image || signUpImg} alt='Profile image' />

				{ Boolean(image) ? '' : 'Log in' }
			</ProfileButton>
		</Container>
	)
}

export default Navbar


const headerHeight = '82px'

const Container = styled.div`
	width: 100vw;
	height: ${headerHeight};

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 2px solid #000000;
	background: radial-gradient(ellipse at center, #3D3D3D 0%, #1E1E1E 57%);

	> button {
		width: ${headerHeight};
		height: 100%;

		background-color: #313131;
	}
`

const NavButton = styled.button`
	border-right: 2px solid #000000;
`

const ProfileButton = styled.button`
	border-left: 2px solid #000000;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 16px;

	> img {
		width: 45px;
		height: 45px;

		border-radius: 50%;
	}
`
