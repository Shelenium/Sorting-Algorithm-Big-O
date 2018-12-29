const personListPath = './images/f-compensation-2018/';

const personList = [
	{
		name: 'Aliaksandr Jyha',
		avatar: 'AJ.gif',
		wish: 'AJ-wish.jpg',
	},
	{
		name: 'Aliaksandr Kokurin',
		avatar: 'AK.gif',
		wish: '',
	},
	{
		name: 'Igor Cheliadinski',
		avatar: 'IC.gif',
		wish: 'IC-wish.jpg',
	},
	{
		name: 'Nikita Zhuykov',
		avatar: 'NZ.gif',
		wish: '',
	},
	{
		name: 'Olga Vasievskaya',
		avatar: 'OV.jpg',
		wish: 'OV-wish.jpg',
	},
	{
		name: 'Pavel Antonenka',
		avatar: 'PA.gif',
		wish: '',
	},
	{
		name: 'Roman Makarov',
		avatar: 'RM.gif',
		wish: '',
	},
	{
		name: 'Elena Shokhan',
		avatar: 'ES.jpg',
		wish: 'ES-wish.jpg',
	}
];

export const personListMap = personList.map(person => {
	person.avatar = `${personListPath}${person.avatar}`;
	if (person.wish) {
		person.wish = `${personListPath}${person.wish}`;
	};
	return person;
});