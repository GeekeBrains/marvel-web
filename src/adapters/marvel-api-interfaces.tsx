// Characters
//------------

export interface CharactersResultApiType {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: {
		offset: number;
		limit: number;
		total: number;
		count: number;
		results: CharacterApiType[];
	};
}

export interface CharacterApiType {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Thumbnail;
	resourceURI: string;
	comics: ComicsApiType;
	series: ComicsApiType;
	stories: Stories;
	events: ComicsApiType;
	urls: URL[];
}

export interface URL {
	type: URLType;
	url: string;
}

export enum URLType {
	Comiclink = 'comiclink',
	Detail = 'detail',
	Wiki = 'wiki',
}

export interface ComicsApiType {
	available: number;
	collectionURI: string;
	items: ResourceItemsType[];
	returned: number;
}

export interface ResourceItemsType {
	resourceURI: string;
	name: string;
}

export interface Stories {
	available: number;
	collectionURI: string;
	items: StoriesItem[];
	returned: number;
}

export interface StoriesItem {
	resourceURI: string;
	name: string;
	type: StoriesItemType;
}

export interface Thumbnail {
	path: string;
	extension: Extension;
}

export enum Extension {
	GIF = 'gif',
	Jpg = 'jpg',
}

export enum StoriesItemType {
	Cover = 'cover',
	Empty = '',
	InteriorStory = 'interiorStory',
}

// Comics/Resources
//------------------

export interface ResourceApiType {
	thumbnail: Thumbnail;
	title: string;
	dates: DateElement[];
}

export interface ResourceResponseApiType {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: ComicData;
}

export interface ComicData {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: ComicResult[];
}

export interface ComicResult {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: any[];
	resourceURI: string;
	urls: URL[];
	series: Series;
	variants: any[];
	collections: any[];
	collectedIssues: any[];
	dates: DateElement[];
	prices: Price[];
	thumbnail: Thumbnail;
	images: Thumbnail[];
	creators: Creators;
	characters: ComicResultCharacters;
	stories: Stories;
	events: ComicResultCharacters;
}

export interface ComicResultCharacters {
	available: number;
	collectionURI: string;
	items: Series[];
	returned: number;
}

export interface Series {
	resourceURI: string;
	name: string;
}

export interface Creators {
	available: number;
	collectionURI: string;
	items: CreatorsItem[];
	returned: number;
}

export interface CreatorsItem {
	resourceURI: string;
	name: string;
	role: string;
}

export interface DateElement {
	type: string;
	date: string;
}

export interface Price {
	type: string;
	price: number;
}
