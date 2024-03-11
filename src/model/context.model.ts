import { CharacterType } from './character.model';

export enum CharacterTypePageEnum {
	search = 'search',
	favorites = 'favorites',
}

export interface ContextType {
	searchCharacters: CharacterType[];
	favoritesCharacters: CharacterType[];
	characterTypePage: CharacterTypePageEnum;
}
