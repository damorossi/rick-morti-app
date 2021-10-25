import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from './../../src/assets/test-utils';
import CharacterItemComponent from './CharacterItemComponent';

const storeMock = {
	auth: {
		_id: '123123',
		name: 'testName',
		email: 'fake@fake.com',
		token: '123123123'
	},
	characters: {
		items: [
			{
				id: 2,
				name: 'Morty Smith',
				status: 'Alive',
				species: 'Human',
				type: '',
				gender: 'Male',
				origin: {
					name: 'Earth (C-137)',
					url: 'https://rickandmortyapi.com/api/location/1'
				},
				location: {
					name: 'Earth (Replacement Dimension)',
					url: 'https://rickandmortyapi.com/api/location/2'
				},
				image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
				episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
				url: 'https://rickandmortyapi.com/api/character/2',
				created: '2017-11-04T18:50:21.651Z'
			},
			{
				id: 361,
				name: 'Toxic Rick',
				status: 'Dead',
				species: 'Humanoid',
				type: "Rick's Toxic Side",
				gender: 'Male',
				origin: {
					name: 'Alien Spa',
					url: 'https://rickandmortyapi.com/api/location/64'
				},
				location: {
					name: 'Earth',
					url: 'https://rickandmortyapi.com/api/location/20'
				},
				image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
				episode: ['https://rickandmortyapi.com/api/episode/27'],
				url: 'https://rickandmortyapi.com/api/character/361',
				created: '2018-01-10T18:20:41.703Z'
			}
		]
	},
	favorites: [
		{
			_id: '617518c7bf01dc2c3f7ce1ba',
			id: 2,
			name: 'Morty Smith',
			status: 'Alive',
			species: 'Human',
			type: '',
			gender: 'Male',
			origin: {
				name: 'Earth (C-137)',
				url: 'https://rickandmortyapi.com/api/location/1'
			},
			location: {
				name: 'Earth (Replacement Dimension)',
				url: 'https://rickandmortyapi.com/api/location/2'
			},
			image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
			episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
			url: 'https://rickandmortyapi.com/api/character/2',
			created: '2017-11-04T18:50:21.651Z'
		}
	],
	pagingInfo: {
		next: '',
		prev: '',
		pages: 1
	}
};
describe('Checks that component works correctly', () => {
	const item = {
		id: 361,
		name: 'Toxic Rick',
		status: 'Dead',
		species: 'Humanoid',
		type: "Rick's Toxic Side",
		gender: 'Male',
		origin: {
			name: 'Alien Spa',
			url: 'https://rickandmortyapi.com/api/location/64'
		},
		location: {
			name: 'Earth',
			url: 'https://rickandmortyapi.com/api/location/20'
		},
		image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
		episode: ['https://rickandmortyapi.com/api/episode/27'],
		url: 'https://rickandmortyapi.com/api/character/361',
		created: '2018-01-10T18:20:41.703Z'
	};

	it('Renders content', () => {
		const component = render(<CharacterItemComponent character={item} isSelected={false} />, {
			initialState: {
				auth: {
					token: 'faketoken',
					id: 'ppppp',
					email: 'Grande@1',
					name: 'Grande'
				}
			}
		});
		component.getByText('Toxic Rick');
	});

	it('Toggles the show detail Component title when button is clicked', () => {
		const component = render(<CharacterItemComponent character={item} isSelected={false} />, {
			storeMock
		});
		const button = component.getByRole('button');
		fireEvent.click(button);
		expect(component.getByText('Details')).toBeInTheDocument();
	});

	it('Should modify switcher if clicked as favorte', () => {
		const inicialState = storeMock;
		const component = render(<CharacterItemComponent character={item} isSelected={false} />, {
			inicialState
		});
		const trigger = component.getByTestId('switcher');
		fireEvent.click(trigger);

		console.log(trigger.firstChild.classList.contains('active'));
	});
});
