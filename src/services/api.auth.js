import axios from 'axios'

import BASE_URL from './baseUrl'


const AUTH_URL = `${BASE_URL}/auth`

const postLogin = ({ email, password }) => {
	const body = { email, password }

	return axios.post(`${AUTH_URL}/login`, body)
}


const postSignUp = ({ username, email, password, image }) => {
	const body = { username, email, password, image }

	return axios.post(`${AUTH_URL}/sign-up`, body)
}


export {
	postLogin,
	postSignUp,
}
