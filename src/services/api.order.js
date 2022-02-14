import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const postOrder = ({ token }) => {
	return axios.post(`${BASE_URL}/checkout`, {}, makeConfig(token))
}


export {
	postOrder,
}
