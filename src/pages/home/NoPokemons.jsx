import styled from 'styled-components'


const NoPokemons = () => {
	const suggestions = [
		'Reduce the number of search parameters',
		'Search for only one Pokémon type at a time',
		'Refresh the page',
	]


	return (
		<Container>
			<Title>No Pokémon Matched Your Search!</Title>

			<p>Try these suggestions to find a Pokémon:</p>

			<SuggestionsList>
				{suggestions.map((item, idx) => <li key={idx}>{item}</li>)}
			</SuggestionsList>
		</Container>
	)
}


export default NoPokemons


const Container = styled.div`
	width: 100vw;
	margin: 50px 0 100px;
	padding: 20px 5px 50px 20px;

	color: #919191;

	border: 2px solid #E3350D;
	border-radius: 10px;

	> p {
		margin: 35px 0 15px 0;
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

const SuggestionsList = styled.ul`
	> li {
		margin-top: 10px;

		::before {
			margin-right: 20px;
	
			content: '•';
		}
	}
`
