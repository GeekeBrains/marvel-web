import { Character } from '@/components/character/character';

export const metadata = {
	title: 'Character',
	description: 'Character',
};

interface Props {
	params: { id: string };
}

export async function generateStaticParams() {
	// Generating static views in prod time
	return [];
}

export default function CharacterPage({ params }: Props) {
	return (
		<div className='characters-page'>
			<Character id={params.id} />
		</div>
	);
}
