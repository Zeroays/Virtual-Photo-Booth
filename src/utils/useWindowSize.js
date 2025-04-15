import { useEffect } from 'react';

export const useWindowSize = (func) => {
	useEffect(() => {
		const handleResize = () => {
			func();
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
};
