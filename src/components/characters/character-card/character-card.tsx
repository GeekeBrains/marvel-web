'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeartWhiteIcon from '@/assets/heart-white-icon.png';
import HeartFullWhiteIcon from '@/assets/heart-full-white-icon.png';
import HeartRedIcon from '@/assets/heart-red-icon.png';

import './character-card.scss';
import { AnimatedOpacity } from '@/components/animations/animated-opacity';
import { AnimatedHoverableComponent } from '@/components/animations/animated-hoverable-component ';
import { useData } from '@/components/hooks/use-data';
import { CharacterType } from '@/model/character.model';

interface Props {
	character: CharacterType;
}

export const CharacterCard = ({ character }: Props) => {
	const [isHover, setIsHover] = useState(false);

	const { addFavoriteCharacters, deleteFavoriteCharacter, deleteSearch, favoritesCharacters } =
		useData();

	const { thumbnail, name } = character;

	const toogleFavoriteCharacter = () => {
		const idExist = checkIsFavorite();

		if (idExist) {
			deleteFavoriteCharacter(character);
		} else {
			addFavoriteCharacters(character);
		}
	};

	const checkIsFavorite = () => {
		return favoritesCharacters.some((favoritesCharacter) => favoritesCharacter.id === character.id);
	};

	return (
		<AnimatedOpacity className='character-card'>
			<Link href={`/character/${character.id}`} onClick={deleteSearch}>
				<Image
					src={`${thumbnail.path}.${thumbnail.extension}`}
					className='character-card-image'
					width={188.57} // Para el optimizado de next
					height={189.97}
					alt={`${character.name} photo`}
				/>
			</Link>
			<AnimatedHoverableComponent
				className='character-card-footer'
				onClick={toogleFavoriteCharacter}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<span className='front'>{name}</span>
				<Image
					src={checkIsFavorite() ? (isHover ? HeartFullWhiteIcon : HeartRedIcon) : HeartWhiteIcon}
					width={12}
					height={11}
					alt={`Favorite icon`}
					className='front'
				/>
			</AnimatedHoverableComponent>
		</AnimatedOpacity>
	);
};
