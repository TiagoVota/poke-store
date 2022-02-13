import { messages } from 'joi-translation-pt-br'


const handleValidation = (object, objectSchema) => {
	const objectError = objectSchema.validate(object, { messages }).error
	const errorMessage = objectError?.details?.[0]?.message
	const error = Boolean(errorMessage) ? improveErrorText(errorMessage) : null
	
	return {
		isValid: !objectError,
		error
	}
}

const improveErrorText = (errorStr) => {
	const strReplaces = [
		['[ref:password]', 'equal to "Password"'],
		['username', 'Name'],
		['email', 'E-mail'],
		['password', 'Password'],
		['repeatPassword', 'Confirm password'],
		['value', 'Value'],
		['description', 'Description'],
	]

	return strReplaces.reduce((acc, rep) => acc.replace(rep[0], rep[1]), errorStr)
}


export {
	handleValidation,
}
