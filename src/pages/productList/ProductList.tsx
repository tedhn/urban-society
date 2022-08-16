import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { catergoryType, shoeType } from "../../../custom";
import Card from "../../components/card/Card";
import Search from "../../components/search/Search";
import { getCategoryData, getShoesInCategory } from "../../shoes.data";

const ProductList = () => {
	const params = useParams();

	const [shoes, setShoes] = useState<Array<shoeType>>([]);
	const [category, setCategory] = useState<catergoryType>({});

	// loading the data on 1st render and whenever category changes
	useEffect(() => {
		const shoeData = getShoesInCategory(params.category!);

		const categoryData = getCategoryData(params.category!);

		console.log(categoryData);
		setCategory(categoryData);
		setShoes(shoeData);
	}, [params.category]);

	return (
		<div>
			<section>
				<img
					src={category.imageUrl}
					className='absolute h-60 w-full top-0 object-cover object-center brightness-75'
					alt='404'
				/>

				<p className='container relative mx-auto mt-14 p-5 text-6xl font-bold z-10'>
					{category.name}
				</p>
			</section>

			<section className='container mx-auto'>
				<div className='my-10 p-5 px-20 flex justify-end items-center gap-4'>
					<Search hidden={false} />
				</div>

				<div className='flex flex-wrap justify-between gap-10 px-20 my-20 text-center'>
					{shoes.map((shoe, index) => {
						return <Card shoe={shoe} key={index} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default ProductList;
