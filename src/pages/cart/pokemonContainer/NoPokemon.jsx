import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NoPokemon = ({ pokeName }) => {
	const suggestions = [
		'Browse for pokémons',
		'Click add to cart',
		'Return here to review and checkout',
	]


	return (
		<Container>
			<Title>Your cart is empty!</Title>

			<p>
				<StyledLink to='/'>Go to homepage</StyledLink> and try these suggestions to add Pokémons to your cart:
			</p>

			<SuggestionsList>
				{suggestions.map((item, idx) => <li key={idx}>{item}</li>)}
			</SuggestionsList>
		</Container>
	)
}


export default NoPokemon


const Container = styled.div`
	width: 100vw;
	margin: 50px 0 125px;
	padding: 20px 15px 50px 20px;

	color: #919191;

	border: 2px solid #E3350D;
	border-radius: 10px;

	> p {
		margin: 5px 0 15px 0;
		
		line-height: 20px;
		font-weight: bold;
	}
`

const Title = styled.h2`
	padding: 10px 0;
	
	font-weight: bold;
	font-size: 20px;
	line-height: 25px;
	color: #E3350D;
`

const StyledLink = styled(Link)`
	color: #313131;
	text-decoration: underline;
`


const SuggestionsList = styled.ul`
	> li {
		margin-top: 10px;

		::before {
			margin-right: 20px;
	
			content: '•';
		}
	}
`
