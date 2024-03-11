import { ComicType } from '@/model/comic.model';

import './character-comic-list.scss';
import Image from 'next/image';

interface Props {
	comics: ComicType[];
}

// TODO: la api no le hace caso el limit
export const CharacterComicList = ({ comics }: Props) => {
	return (
		<section className='character-comic-list'>
			<span className='character-comic-list-title'>COMICS</span>
			<div className='scroll-container'>
				{comics &&
					comics.map((comic, index) => (
						<div key={index} className='comic-item'>
							<Image
								src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
								width={179.2}
								height={268.8}
								alt={comic.title}
							/>
							<div className='comic-item-details'>
								<span className='comic-item-details-title'>{comic.title}</span>
								<span className='comic-item-details-year'>
									{comic.dates[0].date.substring(0, 4)}
								</span>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};
