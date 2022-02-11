import { toCapitalizeCase } from '../utils/stringsManipulation'


const sanitizeUsername = (username) => {
	const fistName = username.trim().split(' ')[0]
	return toCapitalizeCase(fistName)
}


export {
	sanitizeUsername,
}
