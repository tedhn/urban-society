import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { catergoryType, ShoeDataContextType, shoeType } from "../../../custom";
import Card from "../../components/card/Card";
import { ShoeDataContext } from "../../useContext/shoeDataContext";

const ProductList = () => {
	const params = useParams();

	const [shoes, setShoes] = useState<Array<any>>([]);
	const [category, setCategory] = useState<any>({});

	const { getCategory, getCategoryDetails } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	// loading the data on 1st render and whenever category changes
	useEffect(() => {
		initProductListPage();
	}, [params.category]);

	const initProductListPage = async () => {
		const categoryData = await getCategoryDetails(params.category!);
		const shoeData = await getCategory(categoryData.id - 1);

		setShoes(shoeData);
		setCategory(categoryData);
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<section>
				<img
					src={category.Image}
					className='absolute h-60 w-full top-0 object-cover object-center brightness-50'
					alt='404'
				/>

				<p className='container relative mx-auto mt-14 p-5 text-6xl font-bold z-10'>
					{category.Title}
				</p>
			</section>

			<section className='container mx-auto'>
				<div className=' my-10 p-5 px-20 flex justify-end items-center gap-4'>
					<div>filter here</div>
					<div>sorting here</div>
				</div>

				<div className='flex flex-wrap justify-between gap-10 px-20 my-20 text-center'>
					{shoes.map(({ fields, id }) => {
						return <Card shoe={fields} key={id} id={id} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default ProductList;
