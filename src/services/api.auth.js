import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const AUTH_URL = `${BASE_URL}/auth`

const postLogin = ({ email, password }) => {
	const body = { email, password }

	return axios.post(`${AUTH_URL}/login`, body)
}


const postSignUp = ({ name, email, password, image }) => {
	const body = { name, email, password, image }

	return axios.post(`${AUTH_URL}/sign-up`, body)
}


export {
	postLogin,
	postSignUp,
}
