const moneyDisplay = value => `$ ${(value || 0).toFixed(2)}`


const pokeNumberDisplay = pokeNum => `# ${String(pokeNum).padStart(3, '0')}`



export {
	moneyDisplay,
	pokeNumberDisplay,
}
