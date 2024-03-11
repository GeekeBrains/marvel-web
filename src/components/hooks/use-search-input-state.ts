import { useEffect, useRef, useState } from 'react';

type SearchHandler = () => void;

const DELAY_TIME = 700;

export default function useSearchInputState(
	searchHandler: SearchHandler
): [string, React.Dispatch<React.SetStateAction<string>>] {
	const didMountRef = useRef(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		let delayDebounceFn: NodeJS.Timeout;

		if (didMountRef.current) {
			delayDebounceFn = setTimeout(searchHandler, DELAY_TIME);
		} else {
			didMountRef.current = true;
		}

		return () => clearTimeout(delayDebounceFn);
	}, [searchValue]);

	return [searchValue, setSearchValue];
}
