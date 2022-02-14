import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { postSignUp } from '../../services/api.auth'
import { handleValidation } from '../../validations/handleValidation'
import { signUpSchema } from '../../schemas/userSchema.js'
import { errorModal, successModal } from '../../factories/modalFactory'

import Container from '../../components/Container'
import {Background, PokestoreLogo, Label, Input, Button} from '../../components/Forms'
import pokestorelogo from '../../assets/img/poke-store-logo.png'


const SignUp = () => {

	const [refs] = useState({
		usernameRef: useRef(),
		emailRef: useRef(),
		passwordRef: useRef(),
		repeatPasswordRef: useRef(),
		imageRef: useRef()
	})

	const [validity, setValidity] = useState({
		username: true,
		email: true,
		password: true,
		repeatPassword: true,
		image: true
	})

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
			if(validation.error.includes('Name')){
				setValidity({...validity, username: false})
				refs.usernameRef.current.focus()
				return setFormNotice(validation.error)
			}else{
				setValidity({...validity, username: true})
			}
			if(validation.error.includes('mail')){
				setValidity({...validity, email: false})
				refs.emailRef.current.focus()
				return setFormNotice(validation.error)
			}else{
				setValidity({...validity, email: true})
			}
			if(validation.error.includes('Password') && !validation.error.includes('Confirm')){
				setValidity({...validity, password: false, repeatPassword: false})
				refs.passwordRef.current.focus()
				return setFormNotice(validation.error)
			}else{
				setValidity({...validity, password: true, repeatPassword: true})
			}
			if(validation.error.includes('Confirm password')){
				setValidity({...validity, repeatPassword: false})
				refs.repeatPasswordRef.current.focus()
				return setFormNotice(validation.error)
			}else{
				setValidity({...validity, repeatPassword: true})
			}
			if(validation.error.includes('image')){
				setValidity({...validity, image: false})
				refs.imageRef.current.focus()
				return setFormNotice(validation.error)
			}else{
				setValidity({...validity, image: true})
			}

			return setFormNotice(validation.error)
		}
	
		const user = { ...formData }
		delete user.confirmPassword
	
		try {
			setValidity({
				username: true,
				email: true,
				password: true,
				repeatPassword: true,
				image: true
			})
			await postSignUp(user)
			successModal('Account successfully created!')
			navigation('/login')
		} catch (error) {
			if(error.response.status === 409){
				setValidity({...validity, email: false})
				refs.emailRef.current.focus()
				return setFormNotice('This user already exists! Forgot your password?')
			}else{
				setValidity({...validity, email: true})
			}
			if(error.response.status == 422){
				return errorModal('You shouldn\'t tamper with the website code like that ;)')
			}
			setFormNotice('Oh no! Something is wrong with the server! Please try again later!')
			setValidity({
				username: true,
				email: true,
				password: true,
				repeatPassword: true,
				image: true
			})
		}
	}

	return (
		<Container>
			<Background onSubmit={handleSubmit}>
				<PokestoreLogo src={pokestorelogo}/>

				<Label>Name</Label>
				<Input name="username" onChange={handleChange} value={formData.username} ref={refs.usernameRef} validity={validity.username}/>

				<Label>Profile picture URL</Label>
				<Input name="image" onChange={handleChange} value={formData.image} ref={refs.imageRef} validity={validity.image}/>

				<Label>E-mail</Label>
				<Input name="email" type="email" onChange={handleChange} value={formData.email} ref={refs.emailRef} validity={validity.email}/>

				<Label>Password</Label>
				<Input name="password" type="text" onChange={handleChange} value={formData.password} ref={refs.passwordRef} validity={validity.password}/>

				<Label>Confirm password</Label>
				<Input name="repeatPassword" type="text" onChange={handleChange} value={formData.repeatPassword} ref={refs.repeatPasswordRef} validity={validity.repeatPassword}/>
				<Label>{formNotice}</Label>
				
				<Button type="submit">Sign me up!</Button>
				<Link to="/login"><Label>Already have an account? Login!</Label></Link>
				
				
			</Background>
		</Container>
	)
}


export default SignUp
