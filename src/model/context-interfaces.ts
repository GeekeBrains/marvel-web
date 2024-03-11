import { CharacterType } from './character.model';

export enum CharacterTypePageEnum {
	search = 'search',
	favorites = 'favorites',
}

export interface DataStateInterface {
	searchCharacters: CharacterType[];
	favoritesCharacters: CharacterType[];
	characterTypePage: CharacterTypePageEnum;
}
