import { CharacterTypePageEnum } from '@/model/context.model';
import { ContextType } from '@/model/context.model';

export const INITIAL_STATE: ContextType = {
	searchCharacters: [],
	favoritesCharacters: [],
	characterTypePage: CharacterTypePageEnum.search,
};
