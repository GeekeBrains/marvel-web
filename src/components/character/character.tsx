'use client';

import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';

import { CharacterComicList } from './character-comic-list/character-comic-list';

import { AnimatedLine } from '@/components/animations/animated-line';
import { AnimatedTopToBottom } from '@/components/animations/animated-top-to-bottom';

import { getMarvelCharacterById } from '@/adapters/marvel-api';

import { CharacterType } from '@/model/character.model';
import { useData } from '@/components/hooks/use-data';

import HeartWhiteIcon from '@/assets/heart-white-icon.png';
import HeartRedIcon from '@/assets/heart-red-icon.png';

import './character.scss';

const NO_DESCRIPTION_TEXT = 'Dont have description';
const COMICS_RETURN_LIMIT = 20;

interface Props {
	id: string;
}

export const Character = ({ id }: Props) => {
	const [character, setCharacter] = useState<CharacterType>();
	const [showAnimateLine, setShowAnimateLine] = useState(false);

	const { addFavoriteCharacters, deleteFavoriteCharacter, favoritesCharacters } = useData();

	useEffect(() => {
		getCharacterType();
		setShowAnimateLine(true);

		const timeoutId = setTimeout(() => {
			setShowAnimateLine(false);
		}, 1500);

		return () => clearTimeout(timeoutId);
	}, []);

	const getCharacterType = async () => {
		const characterInfo = await getMarvelCharacterById(id, COMICS_RETURN_LIMIT);
		setCharacter(characterInfo);
	};

	const toogleFavoriteCharacter = () => {
		const idExist = checkIsFavorite();

		if (idExist && character) {
			deleteFavoriteCharacter({
				id: character?.id,
				name: character?.name,
				thumbnail: character?.thumbnail,
			});
		} else if (!idExist && character) {
			addFavoriteCharacters({
				id: character?.id,
				name: character?.name,
				thumbnail: character?.thumbnail,
			});
		}
	};

	const checkIsFavorite = () => {
		return favoritesCharacters.some(
			(favoritesCharacter) => favoritesCharacter.id === character?.id
		);
	};

	return (
		<>
			{showAnimateLine && <AnimatedLine />}
			{character && (
				<AnimatedTopToBottom>
					<section className='character-page-header'>
						<div className='character-page-header-center'>
							<div className='character-page-header-wraper'>
								<Image
									src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
									className='character-image'
									alt={`${character.name} photo`}
									width={393}
									height={607.89}
								/>
								<div className='character-detail'>
									<div className='character-detail-name-heart'>
										<span className='character-name'>{character.name}</span>
										<Image
											src={checkIsFavorite() ? HeartRedIcon : HeartWhiteIcon}
											width={24}
											height={22}
											alt={`Favorite icon`}
											onClick={toogleFavoriteCharacter}
										/>
									</div>
									<span className='character-description'>
										{character.description ? character.description : NO_DESCRIPTION_TEXT}
									</span>
								</div>
							</div>
						</div>
						<div className='div-con-esquina-cortada'></div>
					</section>
					{character.comics && <CharacterComicList comics={character.comics} />}
				</AnimatedTopToBottom>
			)}
		</>
	);
};
