import { useState, useContext } from 'react'
import  AuthContext  from '../../contexts/AuthContext'
import { postLogin } from '../../services/api.auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Container from '../../components/Container'
import {Background, PokestoreLogo, Label, Input, Button} from '../../components/Forms'
import pokestorelogo from '../../assets/img/poke-store-logo.png'
import { loginSchema } from '../../schemas/userSchema'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal } from '../../factories/modalFactory'

const Login = () => {

	const navigation = useNavigate()
	const {login} = useContext(AuthContext)

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const [formNotice, setFormNotice] = useState('')

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value })
	}

	const handleSubmit = async(e) => {
		e.preventDefault()
		
		const validation = handleValidation(formData, loginSchema)
		if(!validation.isValid){
			return setFormNotice(validation.error)
		}
	
		try {
			const userSpecs = await postLogin(formData)
			console.log({ userSpecs: userSpecs.data })
			login(userSpecs.data)
			navigation('/')
		} catch (error) {
			console.log(error)
			if(error.response.status === 404){
				return setFormNotice('This user doesn\'t exist.')
			}
			if(error.response.status === 401){
				return setFormNotice('Wrong password. Did you forget it?')
			}
			if(error.response.status == 422){
				return errorModal('You shouldn\'t tamper with the website code like that ;)')
			}
			setFormNotice('Oh no! Something is wrong with the server! Please try again later!')
		}
	}


	return (
		<Container>
			<Background onSubmit={handleSubmit}>
				<PokestoreLogo src={pokestorelogo}/>

				<Label>E-mail</Label>
				<Input name="email" type="email" onChange={handleChange} value={formData.email}/>

				<Label>Password</Label>
				<Input name="password" type="password" onChange={handleChange} value={formData.password}/>
				<Label>{formNotice}</Label>

				<Button type="submit">Log me in!</Button>
				<Link to="/sign-up"><Label>New here? Sign up!</Label></Link>

			</Background>
		</Container>
	)
}


export default Login
