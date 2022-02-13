import { useState } from 'react'
import { postSignUp } from '../../services/api.auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { handleValidation } from '../../validations/handleValidation'
import { signUpSchema } from '../../schemas/userSchema.js'
import Container from '../../components/Container'
import {Background, PokestoreLogo, Label, Input, Button} from '../../components/Forms'
import pokestorelogo from '../../assets/img/poke-store-logo.png'


const SignUp = () => {

	const navigation = useNavigate()

	const [formData, setFormData] = useState({
		name: '',
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
			await postSignUp(user)
			alert('Account successfully created!')
			navigation('/login')
		} catch (error) {
			if(error.response.status === 409){
				return setFormNotice('This user already exists! Forgot your password?')
			}
			if(error.response.status == 422){
				return alert('You shouldnt tamper with the website code like that ;)')
			}
			setFormNotice('Oh no! Something is wrong with the server! Please try again later!')
		}
	}

	return (
		<Container>
			<Background onSubmit={(e) => handleSubmit(e)}>
				<PokestoreLogo src={pokestorelogo}/>

				<Label>Name</Label>
				<Input name="name" onChange={(e) => handleChange(e)} value={formData.name}/>

				<Label>Profile picture URL</Label>
				<Input name="image" onChange={(e) => handleChange(e)} value={formData.image}/>

				<Label>E-Mail</Label>
				<Input name="email" type="email" onChange={(e) => handleChange(e)} value={formData.email}/>

				<Label>Password</Label>
				<Input name="password" type="password" onChange={(e) => handleChange(e)} value={formData.password}/>

				<Label>Confirm password</Label>
				<Input name="repeatPassword" type="password" onChange={(e) => handleChange(e)} value={formData.repeatPassword}/>
				<Label>{formNotice}</Label>
				
				<Button type="submit">Sign me up!</Button>
				<Link to="/login"><Label>Already have an account? Login!</Label></Link>
				
				
			</Background>
		</Container>
	)
}


export default SignUp
