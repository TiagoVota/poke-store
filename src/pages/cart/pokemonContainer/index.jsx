import { Link } from 'react-router-dom'
import styled from 'styled-components'


import NoPokemon from './NoPokemon'
import PokemonItem from './PokemonItem'



const PokemonContainer = ({ haveCart }) => {

	if (haveCart == 404) return <NoPokemon />
	return (
		<>
			<Container>
				{haveCart.map(item => <PokemonItem key={item._id} pokeInfo={item}/>)}
			</Container>
			<Link to='/checkout'><Checkout>Proceed to checkout</Checkout></Link>
		</>
	)
}


export default PokemonContainer


const Container = styled.div`
	width: 100vw;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`
const Checkout = styled.button`
	width: 180px;
	height: 100px;
	background-color: #000;
	color: #fff;
	border-radius: 10px;
	font-size: 20px;
	margin-bottom: 50px;
`
