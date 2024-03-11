import { ComicType } from './comic.model';

export type CharacterType = {
	id: number;
	name: string;
	thumbnail: Thumbnail;
	description?: string;
	comics?: ComicType[];
};

export interface Thumbnail {
	path: string;
	extension: Extension;
}

export enum Extension {
	GIF = 'gif',
	Jpg = 'jpg',
}
