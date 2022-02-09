import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
	
  html {
		font-family: 'Exo 2', sans-serif;
		font-style: normal;
		font-weight: normal;
    background-color: #FFFFFF;
  }
	
	button, input {
		border-width: 0px;
		font-family: 'Exo 2', sans-serif;
		font-style: normal;
		font-weight: normal;
	}

	button {
		color: #FFFFFF;
		background-color: #30A7D7;
		opacity: ${p => p.isDisable ? 0.7 : 1};

		cursor: ${p => p.isDisable ? 'none' : 'pointer'};

		:hover {
			filter: brightness(90%);
		}
	}

	input {
		color: #000000;

		background-color: ${p => p.isDisable ? '#F2F2F2' : '#FFFFFF'};

		pointer-events: ${p => p.isDisable ? 'none' : 'all'};

		::placeholder {
			color: #575757;
		}

		:focus {
			color: #30A7D7;
			outline: none;
		}
	}

	a {
		text-decoration: none;
	}

	strong {
		font-weight: bold;
	}
`


export default GlobalStyle