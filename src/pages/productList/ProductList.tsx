import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import Search from "../../components/search/Search";

const ProductList = () => {
	const params = useParams();

	return (
		<div>
			<section>
				<img
					src='../../src/images/productlist-banner.jpg'
					className='absolute h-60 w-full top-0 object-cover object-center brightness-75'
					alt='404'
				/>

				<p className='container relative mx-auto mt-14 p-5 text-6xl font-bold z-10'>
					{params.category}
				</p>
			</section>

			<section className='container mx-auto'>
				<div className='my-10 p-5 px-20 flex justify-end items-center gap-4'>
					<Search hidden={false} />
				</div>

				<div className='flex flex-wrap justify-between gap-10 px-20 my-20 text-center'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</div>
	);
};

export default ProductList;
