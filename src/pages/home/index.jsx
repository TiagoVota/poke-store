import pageTitles from '../../utils/pageTitles'

import Container from '../../components/ContainerHome'
import Header from '../shared/header'


const Home = () => {
	return (
		<Container>
			<Header title={pageTitles['home']} />
			
		</Container>
	)
}


export default Home
