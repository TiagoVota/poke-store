import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { postSignUp } from '../../services/api.auth'
import { handleValidation } from '../../validations/handleValidation'
import { signUpSchema } from '../../schemas/userSchema.js'
import { errorModal, successModal } from '../../factories/modalFactory'

import Container from '../../components/Container'
import {Background, PokestoreLogo, Label, Input, Button} from '../../components/Forms'
import pokestorelogo from '../../assets/img/poke-store-logo.png'


const SignUp = () => {

	const navigation = useNavigate()

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		repeatPassword: '',
		image: ''
	})

	const [formNotice, setFormNotice] = useState('')

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value })
	}

	const handleSubmit = async(e) => {
		e.preventDefault()
		
		const validation = handleValidation(formData, signUpSchema)
		if(!validation.isValid){
			return setFormNotice(validation.error)
		}
	
		const user = { ...formData }
		delete user.confirmPassword
	
		try {
			console.log({ user })
			await postSignUp(user)
			successModal('Account successfully created!')
			navigation('/login')
		} catch (error) {
			if(error.response.status === 409){
				return setFormNotice('This user already exists! Forgot your password?')
			}
			if(error.response.status == 422){
				console.log({ error })
				return errorModal('You shouldn\'t tamper with the website code like that ;)')
			}
			setFormNotice('Oh no! Something is wrong with the server! Please try again later!')
		}
	}

	return (
		<Container>
			<Background onSubmit={handleSubmit}>
				<PokestoreLogo src={pokestorelogo}/>

				<Label>Name</Label>
				<Input name="username" onChange={handleChange} value={formData.username}/>

				<Label>Profile picture URL</Label>
				<Input name="image" onChange={handleChange} value={formData.image}/>

				<Label>E-mail</Label>
				<Input name="email" type="email" onChange={handleChange} value={formData.email}/>

				<Label>Password</Label>
				<Input name="password" type="text" onChange={handleChange} value={formData.password}/>

				<Label>Confirm password</Label>
				<Input name="repeatPassword" type="text" onChange={handleChange} value={formData.repeatPassword}/>
				<Label>{formNotice}</Label>
				
				<Button type="submit">Sign me up!</Button>
				<Link to="/login"><Label>Already have an account? Login!</Label></Link>
				
				
			</Background>
		</Container>
	)
}


export default SignUp
