import { CharacterType } from '@/model/character.model';
import { ContextType } from '@/model/context.model';
import { CharacterTypePageEnum } from '@/model/context.model';

type DataAction =
	| { type: 'addSearchCharacters'; payload: CharacterType[] }
	| { type: 'addFavoriteCharacters'; payload: CharacterType }
	| { type: 'deleteFavoriteCharacter'; payload: CharacterType }
	| { type: 'changeCharacterTypePage'; payload: string }
	| { type: 'toggleCharacterTypePage' }
	| { type: 'deleteSearch' };

export const dataReducer = (state: ContextType, action: DataAction): ContextType => {
	switch (action.type) {
		case 'addSearchCharacters':
			return {
				...state,
				searchCharacters: action.payload,
			};

		case 'addFavoriteCharacters':
			return {
				...state,
				favoritesCharacters: [...state.favoritesCharacters, action.payload],
			};

		case 'deleteFavoriteCharacter':
			const updatedFavorites = state.favoritesCharacters.filter(
				(character) => character.id !== action.payload.id
			);
			return {
				...state,
				favoritesCharacters: updatedFavorites,
			};

		case 'toggleCharacterTypePage':
			return {
				...state,
				characterTypePage:
					state.characterTypePage == CharacterTypePageEnum.search
						? CharacterTypePageEnum.favorites
						: CharacterTypePageEnum.search,
			};

		case 'changeCharacterTypePage':
			return {
				...state,
				characterTypePage: action.payload as CharacterTypePageEnum,
			};

		case 'deleteSearch':
			return {
				...state,
				searchCharacters: [],
			};

		default:
			return state;
	}
};
