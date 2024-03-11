import { createContext } from 'react';

import { ContextType } from '@/model/context.model';
import { CharacterType } from '@/model/character.model';

export type AppContextProps = {
	dataState: ContextType;
	addSearchCharacters: (characters: CharacterType[]) => void;
	addFavoriteCharacters: (characters: CharacterType) => void;
	deleteFavoriteCharacter: (characters: CharacterType) => void;
	toggleCharacterTypePage: () => void;
	changeCharacterTypePage: (type: string) => void;
	deleteSearch: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
