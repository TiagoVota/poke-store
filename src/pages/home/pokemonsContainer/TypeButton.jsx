import styled from 'styled-components'


import { makeTypeColors } from '../../../utils/typesColors'


const TypeButton = ({ type }) => {
	return (
		<Container typeColors={makeTypeColors(type)} >
			{type}			
		</Container>
	)
}


export default TypeButton


const Container = styled.button`
	width: 130px;
	margin-right: 8px;

	font-size: 15px;
	line-height: 24px;
	text-align: center;
	color: ${p => p.typeColors.text};

	border-radius: 3px;
	background-color: ${p => p.typeColors.background};
`

