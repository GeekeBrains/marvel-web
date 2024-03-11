'use client';
import { CharacterCard } from '@/components/characters/character-card/character-card';
import { useData } from '@/components/hooks/use-data';

import './characters-list.scss';
import { CharacterType } from '@/model/character.model';
import { useEffect, useState } from 'react';
import { CharacterTypePageEnum } from '@/model/context-interfaces';

const CharacterList = () => {
	const [characters, setCharacters] = useState<CharacterType[]>([]);
	const { searchCharacters, favoritesCharacters, characterTypePage } = useData();

	useEffect(() => {
		if (characterTypePage === CharacterTypePageEnum.search) {
			setCharacters(searchCharacters);
		}
		if (characterTypePage === CharacterTypePageEnum.favorites) {
			setCharacters(favoritesCharacters);
		}
	}, [characterTypePage, searchCharacters, favoritesCharacters]);

	return (
		<section className='character-list'>
			{characters?.map((character: CharacterType) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</section>
	);
};

export default CharacterList;
