import { CharacterType } from '@/model/character.model';
import { ComicType } from '@/model/comic.model';
import {
	CharacterApiType,
	CharactersResultApiType,
	ResourceApiType,
	ResourceItemsType,
	ResourceResponseApiType,
} from './marvel-api-interfaces';

const crypto = require('crypto');

const publicKey = '571b2af8cb2f92113a33ecab4acac79d';
const privateKey = '2e3fe2007c74bac474423365c029ff5bfc22fc07';

const url = 'https://gateway.marvel.com:443';

const timestamp = new Date().getTime().toString();
const hash = crypto
	.createHash('md5')
	.update(timestamp + privateKey + publicKey)
	.digest('hex');

export const getMarvelCharactersByName = async (
	limit: number,
	nameStartsWith: string | undefined = undefined
): Promise<CharacterType[]> => {
	const res: CharactersResultApiType = await fetch(
		`${url}/v1/public/characters?${
			nameStartsWith ? `nameStartsWith=${nameStartsWith}` : ''
		}&limit=${limit}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
	).then((res) => res.json());

	const characters = res.data.results.map((character: CharacterApiType) => ({
		id: character.id,
		name: character.name,
		thumbnail: character.thumbnail,
	}));

	return characters;
};

export const getMarvelCharacterById = async (
	id: string,
	comicsLimit: number
): Promise<CharacterType> => {
	const resp: CharactersResultApiType = await fetch(
		`${url}/v1/public/characters/${id}?&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`,
		{
			next: {
				revalidate: 60 * 60 * 30,
			},
		}
	).then((res) => res.json());

	const characterInfo = resp.data.results[0];

	const promises: Promise<ResourceApiType>[] = characterInfo.comics.items
		.slice(0, comicsLimit)
		.map(async (comic: ResourceItemsType) => {
			return getMarvelResourceByUri(comic.resourceURI);
		});

	const comics: ResourceApiType[] = await Promise.all(promises);
	console.log('ºº ~ file: marvel-api.tsx:62 ~ getMarvelCharacterById ~ comics:', comics);

	return {
		id: characterInfo.id,
		name: characterInfo.name,
		description: characterInfo.description,
		thumbnail: characterInfo.thumbnail,
		comics,
	};
};

export const getMarvelResourceByUri = async (resourceUri: string): Promise<ResourceApiType> => {
	const resp: ResourceResponseApiType = await fetch(
		`${resourceUri}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`,
		{
			next: {
				revalidate: 60 * 60 * 30,
			},
		}
	).then((res) => res.json());

	const resource = resp.data.results[0];

	return {
		thumbnail: resource.thumbnail,
		title: resource.title,
		dates: resource.dates,
	};
};

// export const getMarvelComicsByCharacterId = async (): ComicType[] => {
// 	const promises: Promise<ComicApiType>[] = characterComics.items.map(async (comic) => {
// 		return getMarvelComicByResourceURI(comic.resourceURI, MAX_COMICS_TO_RETURN);
// 	});

// 	return await Promise.all(promises);
// };
