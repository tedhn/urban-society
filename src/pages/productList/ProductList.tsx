import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	catergoryType,
	RecordType,
	ShoeDataContextType,
} from "../../../custom";
import { Card, DropDown } from "../../components";
import { ShoeDataContext } from "../../useContext";

const ProductList = () => {
	const params = useParams();

	const options = ["None", "Price", "Alphabetically", "Latest"];

	const [shoes, setShoes] = useState<Array<RecordType>>([]);
	const [category, setCategory] = useState<catergoryType>({
		image: "",
		title: "",
		name: "",
		id: 0,
	});
	const [sorting, setSorting] = useState<number>(-1);

	const { getCategory, getCategoryDetails } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	// loading the data on 1st render and whenever category changes
	useEffect(() => {
		initProductListPage();
	}, [params.category]);

	useEffect(() => {
		switch (sorting) {
			case 1: {
				console.log(1);
				const newShoeArr = shoes;

				newShoeArr.sort((a, b) => a.fields.price - b.fields.price);

				console.log(newShoeArr);
				break;
			}
			case 2: {
				console.log(2);

				const newShoeArr = shoes;

				newShoeArr.sort((a, b) => a.fields.name.localeCompare(b.fields.name));

				break;
			}
			case 3: {
				const newShoeArr = shoes;

				newShoeArr.sort((a, b) => a.createdTime.localeCompare(b.createdTime));
				break;
			}
			default: {
				const newShoeArr = shoes;

				newShoeArr.sort((a, b) => a.fields.id - b.fields.id);
				break;
			}
		}
	}, [sorting]);

	const initProductListPage = async () => {
		const categoryData = await getCategoryDetails(params.category!);
		const shoeData = await getCategory(categoryData.id - 1);

		console.log(shoeData);
		setShoes(shoeData);
		setCategory(categoryData);
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<section>
				<img
					src={category.image}
					className='absolute h-60 w-full top-0 object-cover object-center brightness-50'
					alt='404'
				/>

				<p className='container relative mx-auto mt-14 p-5 text-6xl font-bold z-10'>
					{category.title}
				</p>
			</section>

			<section className='container mx-auto'>
				<div className=' my-10 p-5 px-20 flex justify-end items-center gap-4'>
					<DropDown
						label={sorting === 0 ? "Sort" : options[sorting]}
						options={options}
						setSorting={setSorting}
					/>
				</div>

				<div className='flex flex-wrap justify-center gap-10 px-20 my-20 text-center'>
					{shoes.map((record) => {
						return <Card shoe={record.fields} key={record.id} id={record.id} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default ProductList;
