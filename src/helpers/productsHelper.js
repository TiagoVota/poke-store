const moneyDisplay = (value) => moneyFormatter.format(value).replace('$', '$ ')

const moneyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})


const pokeNumberDisplay = pokeNum => `#${String(pokeNum).padStart(3, '0')}`


const makeNumbersList = (firstNumber, lastNumber) => {
	const listNumbers = []
	for (let i = firstNumber; i <= lastNumber; i++) listNumbers.push(i)

	return listNumbers
}


export {
	moneyDisplay,
	pokeNumberDisplay,
	makeNumbersList,
}
