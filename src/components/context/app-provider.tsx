import { useReducer } from 'react';

import { AppContext } from './app-context';
import { dataReducer } from './data-reducer';
import { INITIAL_STATE } from './initial-state';

import { CharacterType } from '@/model/character.model';

interface props {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const AppProvider = ({ children }: props) => {
	const [dataState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

	const addSearchCharacters = (characters: CharacterType[]) => {
		dispatch({ type: 'addSearchCharacters', payload: characters });
	};

	const addFavoriteCharacters = (character: CharacterType) => {
		dispatch({ type: 'addFavoriteCharacters', payload: character });
	};

	const deleteFavoriteCharacter = (character: CharacterType) => {
		dispatch({ type: 'deleteFavoriteCharacter', payload: character });
	};

	const toggleCharacterTypePage = () => {
		dispatch({ type: 'toggleCharacterTypePage' });
	};

	const changeCharacterTypePage = (type: string) => {
		dispatch({ type: 'changeCharacterTypePage', payload: type });
	};

	const deleteSearch = () => {
		dispatch({ type: 'deleteSearch' });
	};

	return (
		<AppContext.Provider
			value={{
				dataState,
				addSearchCharacters,
				addFavoriteCharacters,
				deleteFavoriteCharacter,
				toggleCharacterTypePage,
				changeCharacterTypePage,
				deleteSearch,
			}}>
			{children}
		</AppContext.Provider>
	);
};
