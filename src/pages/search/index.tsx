import React, { useContext, useEffect, useState } from "react";
import { ShoeDataContextType, shoeType } from "../../../custom";
import {Card} from "../../components";
import { ShoeDataContext } from "../../useContext";

interface propTypes {
	results?: shoeType[];
}

const Search: React.FC<propTypes> = ({ results }) => {
	const { searchShoe } = useContext(ShoeDataContext) as ShoeDataContextType;

	const [searchResults, setSearchResults] = useState<any>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		if (searchQuery !== "") {
			handleSearch();
		}
	}, [searchQuery]);

	const handleSearch = async () => {
		const searchResults = await searchShoe(searchQuery);

		setSearchResults(searchResults);
	};

	return (
		<div className='container mx-auto px-4 text-center bg-darkgrey flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>
				{searchQuery === ""
					? "Search Results"
					: `Search Results : ${searchQuery}`}
			</div>

			<input
				type='text'
				className=' px-4 py-2 w-full font-light text-lg border-2 rounded-md text-white border-white/50 bg-transparent'
				placeholder='Search'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<div className='flex flex-wrap justify-center gap-10 px-20 my-20 text-center'>
				{searchResults.map(({ fields, id }: any) => {
					console.log(fields);
					return <Card shoe={fields} key={id} id={id} />;
				})}
			</div>
		</div>
	);
};

export default Search;
