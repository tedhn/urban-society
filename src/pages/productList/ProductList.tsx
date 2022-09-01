import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
	catergoryType,
	RecordType,
	ShoeDataContextType,
} from "../../../custom";
import { Card, DropDown } from "../../components";
import { ShoeDataContext } from "../../useContext";

const ProductList = () => {
	const params = useParams();

	const { getCategory, getCategoryDetails } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	const options = ["None", "Price", "Alphabetically", "Latest"];

	const [shoesData, setShoesData] = useState<Array<RecordType>>([]);
	const [category, setCategory] = useState<catergoryType>({
		image: "",
		title: "",
		name: "",
		id: 0,
	});
	const [sorting, setSorting] = useState({type: 'sorting ' , choice : 'None'});

	// loading the data on 1st render and whenever category changes
	useEffect(() => {
		initProductListPage();
	}, [params.category]);

	useEffect(() => {
		switch (sorting.choice) {
			case "Price": {
				shoesData.sort((a, b) => a.fields.price - b.fields.price);
				break;
			}
			case "Alphabetically": {
				shoesData.sort((a, b) => a.fields.name.localeCompare(b.fields.name));
				break;
			}
			case "Latest": {
				shoesData.sort((a, b) => a.createdTime.localeCompare(b.createdTime));
				break;
			}
			default: {
				shoesData.sort((a, b) => a.fields.id - b.fields.id);
				break;
			}
		}
	}, [sorting]);

	const initProductListPage = async () => {
		const categoryData = await getCategoryDetails(params.category!);
		const shoeData = await getCategory(categoryData.id - 1);

		setShoesData(shoeData);
		setCategory(categoryData);
		window.scrollTo(0, 0);
	};

	return (
		<div>
			{shoesData.length !== 0 ? (
				<>
					<section>
						<img
							src={category.image}
							className='absolute h-60 w-full top-0 object-cover object-center brightness-50'
							alt='404'
						/>

						<p className='container relative mx-auto mt-14 p-5 text-xl font-bold z-10 lg:text-6xl'>
							{category.title}
						</p>
					</section>

					<section className='container mx-auto'>
						<div className=' my-10 p-5 flex justify-end items-center gap-4 lg:px-20'>
							<DropDown
							type="sorting"
								label={sorting.choice === 'None' ? "Sort" : sorting.choice}
								options={options}
								setUpdate={setSorting}
							/>
						</div>

						<div className='flex flex-wrap justify-evenly gap-10 px-6  my-20 text-center lg:justify-center lg:px-20'>
							{shoesData.map((record) => {
								return (
									<Card shoe={record.fields} key={record.id} id={record.id} />
								);
							})}
						</div>
					</section>
				</>
			) : (
				<div className='container text-center mx-auto my-24	'>
					<PropagateLoader color='#ffffff' size={8} />
				</div>
			)}
		</div>
	);
};

export default ProductList;
