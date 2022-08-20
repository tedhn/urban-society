import React, { useEffect, useState } from "react";
import { shoeType } from "../../../custom";
import Card from "../../components/card/Card";
import { searchForShoe } from "../../shoes.data";

interface propTypes {
	results?: shoeType[];
}

const Search: React.FC<propTypes> = ({ results }) => {
	const [searchResults, setSearchResults] = useState<Array<shoeType>>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		if (searchQuery !== "") {
			const searchResults = searchForShoe(searchQuery);

			setSearchResults(searchResults);
		}
	}, [searchQuery]);

	return (
		<div className='container mx-auto px-4 text-center bg-darkgrey flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>
				{searchQuery === "" ? "Search Results" : `Search Results : ${searchQuery}`}
			</div>

			<input
				type='text'
				className=' px-4 py-2 w-full font-light text-lg border-2 rounded-md text-white border-white/50 bg-transparent'
				placeholder='Search'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<div className='flex flex-wrap justify-center gap-10 px-20 my-20 text-center'>
				{searchResults.map((shoe, index) => {
					return <Card shoe={shoe} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Search;
