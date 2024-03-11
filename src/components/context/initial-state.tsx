import { CharacterTypePageEnum } from '@/model/context-interfaces';
import { DataStateInterface } from '../interfaces/context-interfaces';

export const INITIAL_STATE: DataStateInterface = {
	searchCharacters: [],
	favoritesCharacters: [],
	characterTypePage: CharacterTypePageEnum.search,
};
