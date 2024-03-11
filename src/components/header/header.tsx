'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useData } from '@/components/hooks/use-data';

import MarvelLogo from '@/assets/marvel-logo.png';
import RedHeartIcon from '@/assets/heart-red-icon.png';

import './header.scss';
import { CharacterTypePageEnum } from '@/model/context.model';

export const Header = () => {
	const { favoritesCharacters, changeCharacterTypePage } = useData();

	return (
		<header>
			<Link href={`/`} onClick={() => changeCharacterTypePage(CharacterTypePageEnum.search)}>
				<Image src={MarvelLogo} width={130} height={52} alt={`Marvel logo`} priority />
			</Link>

			<Link
				href={`/`}
				className='header-favorites'
				onClick={() => changeCharacterTypePage(CharacterTypePageEnum.favorites)}>
				<Image src={RedHeartIcon} width={25} height={25} alt={`Favorite icon`} />
				<span>{favoritesCharacters.length}</span>
			</Link>
		</header>
	);
};
