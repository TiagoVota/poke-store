import { useParams } from 'react-router-dom'

import Container from '../../components/Container'


const ProductPage = () => {
	const { pokeName } = useParams()

	console.log({ pokeName })
	return (
		<Container>
			
		</Container>
	)
}


export default ProductPage
