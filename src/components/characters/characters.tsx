'use client';
import CharacterList from './characters-list/characters-list';
import CharacterSearch from './characters-search/characters-search';
import './characters.scss';

export const Characters = () => {
	return (
		<div className='characters'>
			<CharacterSearch />
			<CharacterList />
		</div>
	);
};
