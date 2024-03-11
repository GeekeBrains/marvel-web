export type ComicType = {
	title: string;
	thumbnail: Thumbnail;
	dates: DateElement[];
};

export interface DateElement {
	type: string;
	date: string;
}

export interface Thumbnail {
	path: string;
	extension: string;
}
