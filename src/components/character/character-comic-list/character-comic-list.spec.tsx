import { ComicType } from '@/model/comic.model';
import { CharacterComicList } from './character-comic-list';
import { render, screen } from '@testing-library/react';

const comicsListMock: ComicType[] = [
	{
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3',
			extension: 'jpg',
		},
		title: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
		dates: [
			{
				type: 'onsaleDate',
				date: '2013-03-20T00:00:00-0400',
			},
			{
				type: 'focDate',
				date: '2013-03-04T00:00:00-0500',
			},
			{
				type: 'unlimitedDate',
				date: '2013-11-04T00:00:00-0500',
			},
			{
				type: 'digitalPurchaseDate',
				date: '2013-07-09T00:00:00-0400',
			},
		],
	},
	{
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a',
			extension: 'jpg',
		},
		title: 'Hulk (2008) #53',
		dates: [
			{
				type: 'onsaleDate',
				date: '2012-06-06T00:00:00-0400',
			},
			{
				type: 'focDate',
				date: '2012-05-23T00:00:00-0400',
			},
			{
				type: 'unlimitedDate',
				date: '2013-04-08T00:00:00-0400',
			},
			{
				type: 'digitalPurchaseDate',
				date: '2012-06-06T00:00:00-0400',
			},
		],
	},
	{
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2',
			extension: 'jpg',
		},
		title: 'Hulk (2008) #54',
		dates: [
			{
				type: 'onsaleDate',
				date: '2012-06-20T00:00:00-0400',
			},
			{
				type: 'focDate',
				date: '2012-06-06T00:00:00-0400',
			},
			{
				type: 'unlimitedDate',
				date: '2013-04-08T00:00:00-0400',
			},
			{
				type: 'digitalPurchaseDate',
				date: '2012-06-20T00:00:00-0400',
			},
		],
	},
	{
		thumbnail: {
			path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543',
			extension: 'jpg',
		},
		title: 'Hulk (2008) #55',
		dates: [
			{
				type: 'onsaleDate',
				date: '2012-07-04T00:00:00-0400',
			},
			{
				type: 'focDate',
				date: '2012-06-20T00:00:00-0400',
			},
			{
				type: 'unlimitedDate',
				date: '2013-04-08T00:00:00-0400',
			},
			{
				type: 'digitalPurchaseDate',
				date: '2012-07-04T00:00:00-0400',
			},
		],
	},
];

describe('Character Comic List', () => {
	test('Render comics', async () => {
		render(<CharacterComicList comics={comicsListMock}></CharacterComicList>);
		const characterCards = await screen.findAllByRole('img');

		expect(characterCards).toHaveLength(4);
	});
	test('Comic have title', async () => {
		render(<CharacterComicList comics={comicsListMock}></CharacterComicList>);

		const titleElement = screen.queryByText(comicsListMock[0].title);
		expect(titleElement).toBeTruthy();
	});
});
