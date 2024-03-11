'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { AnimatedTopToBottom } from '@/components/animations/animated-top-to-bottom';
import { AnimatedLine } from '@/components/animations/animated-line';
import useSearchInputState from '@/components/hooks/use-search-input-state';
import { useData } from '@/components/hooks/use-data';
import { getMarvelCharactersByName } from '@/adapters/marvel-api';
import { CharacterType } from '@/model/character.model';
import SearchIcon from '@/assets/search-icon.png';

import './characters-search.scss';
import { CharacterTypePageEnum } from '@/model/context.model';

const MAX_CHARACTERS_TO_RETURN = 50;
const SEARCH_PLACEHOLDER = 'SEARCH A CHARACTER...';

const CharacterSearch = () => {
	const [showAnimateLine, setShowAnimateLine] = useState(false);

	const {
		addSearchCharacters,
		searchCharacters,
		favoritesCharacters,
		characterTypePage,
		changeCharacterTypePage,
	} = useData();

	const [searchValue, setSearchValue] = useSearchInputState(() => {
		if (searchValue.trim() == '') {
			searchAllCharacters();
		} else {
			searchByName(searchValue);
		}
	});

	useEffect(() => {
		setShowAnimateLine(true);
		if (searchValue.trim() == '') searchAllCharacters();
	}, []);

	const searchAllCharacters = async () => {
		const characters: CharacterType[] = await getMarvelCharactersByName(MAX_CHARACTERS_TO_RETURN);
		await addSearchCharacters(characters);
	};

	const searchByName = async (search: string) => {
		changeCharacterTypePage(CharacterTypePageEnum.search);
		const characters: CharacterType[] = await getMarvelCharactersByName(
			MAX_CHARACTERS_TO_RETURN,
			search
		);
		await addSearchCharacters(characters);
	};

	return (
		<>
			{showAnimateLine && <AnimatedLine />}
			<div className='characters-search'>
				<section
					className={
						characterTypePage == CharacterTypePageEnum.search
							? 'search-section'
							: 'search-section fav-maxh'
					}>
					{' '}
					{characterTypePage == CharacterTypePageEnum.favorites && (
						<AnimatedTopToBottom>
							<span className='favorite-title'>FAVORITES</span>
						</AnimatedTopToBottom>
					)}
					<label>
						<Image src={SearchIcon} width={12} height={12} alt={`Search icon`} />
						<input
							type='text'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder={SEARCH_PLACEHOLDER}
						/>
					</label>
					<span>
						{characterTypePage == CharacterTypePageEnum.search
							? searchCharacters.length
							: favoritesCharacters.length}{' '}
						RESULTS
					</span>
				</section>
			</div>
		</>
	);
};

export default CharacterSearch;
