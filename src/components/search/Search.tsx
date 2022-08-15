import React from "react";

import { ReactComponent as SearchSVG } from "../../svg/search.svg";

interface PropTypes {
  hidden:boolean;
}

const Search :React.FC<PropTypes> = ({hidden}) => {
	return (
		<>
			<input
				hidden={hidden}
				type='text'
				className='w-48 px-4 py-1 font-light text-xs border-2 rounded-full border-white/25 bg-transparent'
				placeholder='Search'
			/>

			<SearchSVG />
		</>
	);
};

export default Search;
