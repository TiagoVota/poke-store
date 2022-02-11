import styled from 'styled-components'


const FilterContainer = () => {
	return (
		<Container>
			<p>Filter pokemons by number and name is coming</p>
			<p>Working in progress...</p>
		</Container>
	)
}


export default FilterContainer


const Container = styled.div`
	width: 100vw;
	height: 200px;
	padding: 0 8vw;

	
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	justify-content: space-evenly;

	color: #FFFFFF;

	background-color: #313131;

	> p {
		margin-bottom: 10px;
		font-weight: bold;
		font-size: 20px;
		line-height: 25px;
	}
`
