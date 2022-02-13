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
			const token = await postLogin(formData)
			login(token.data)
			navigation('/')
		} catch (error) {
			console.log(error)
			if(error.response.status === 404){
				return setFormNotice('This user doesnt exist.')
			}
			if(error.response.status === 401){
				return setFormNotice('Wrong password. Did you forget it?')
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

				<Label>email</Label>
				<Input name="email" type="email" onChange={(e) => handleChange(e)} value={formData.email}/>

				<Label>Password</Label>
				<Input name="password" type="password" onChange={(e) => handleChange(e)} value={formData.password}/>
				<Label>{formNotice}</Label>

				<Button type="submit">Log me in!</Button>
				<Link to="/sign-up"><Label>New here? Signup!</Label></Link>

			</Background>
		</Container>
	)
}


export default Login
