const typesColors = {
	'Grass': {
		background: '#9BCC50',
		text: '#212121',
	},
	'Poison': {
		background: '#B97FC9',
		text: '#FFFFFF',
	},
	'Fire': {
		background: '#FD7D24',
		text: '#FFFFFF',
	},
	'Flying': {
		background: '#3DC7EF',
		text: '#212121',
	},
	'Water': {
		background: '#4592C4',
		text: '#FFFFFF',
	},
	'Electric': {
		background: '#EED535',
		text: '#212121',
	},
}


const makeTypeColors = (type) => {
	return typesColors[type] || {text: '#FFFFFF', background: '#000000'}
}


export {
	makeTypeColors
}
