import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
	const query = useQuery();

	return (
		<div>
			<h1>Merhaba</h1>
			<h1>{query.get('q')}</h1>
		</div>
	);
};

export default Search;
