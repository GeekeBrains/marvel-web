import { useContext } from 'react';
import { AppContext } from '@/components/context/app-context';

export const useData = () => {
	const {
		dataState,
		addSearchCharacters,
		addFavoriteCharacters,
		deleteFavoriteCharacter,
		toggleCharacterTypePage,
		changeCharacterTypePage,
		deleteSearch,
	} = useContext(AppContext);

	const { searchCharacters, favoritesCharacters, characterTypePage } = dataState;

	return {
		searchCharacters: searchCharacters,
		favoritesCharacters: favoritesCharacters,
		characterTypePage: characterTypePage,
		addSearchCharacters,
		addFavoriteCharacters,
		deleteFavoriteCharacter,
		toggleCharacterTypePage,
		changeCharacterTypePage,
		deleteSearch,
	};
};
