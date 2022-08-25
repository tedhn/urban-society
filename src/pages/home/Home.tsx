import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecordType, ShoeDataContextType } from "../../../custom";
import { Card, ProductCardLoader } from "../../components";
import { ShoeDataContext } from "../../useContext";

const Home = () => {
	const navigate = useNavigate();

	const [newArrival, setNewArrival] = useState<Array<RecordType>>([]);
	const [highLights, setHighlights] = useState<Array<RecordType>>([]);

	const { getRandomShoes } = useContext(ShoeDataContext) as ShoeDataContextType;

	useEffect(() => {
		initHomePageShoeData();
	}, []);

	const initHomePageShoeData = async () => {
		const shoeData = await getRandomShoes(10);

		setNewArrival(shoeData.slice(0, 5));
		setHighlights(shoeData.slice(5, 10));
	};

	return (
		<div>
			<section className='container h-screen mx-auto'>
				<img
					src='../../src/images/hero-bg.jpg'
					alt='404'
					className='absolute top-0 left-0 z-0 w-full h-full object-cover brightness-75 '
				/>
				<div className='absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-transparent to-darkgrey'></div>

				<div className='relative z-10 top-1/2 text-center'>
					<h1 className='text-6xl font-bold'>Join the Society</h1>
					<h2 className='my-6'>Find a style that’s uniquely you</h2>
					<button
						className=' py-2 px-4 font-medium text-darkgrey bg-gold'
						onClick={() => navigate("/category")}>
						Explore More
					</button>
				</div>
			</section>

			<section className='container relative mx-auto my-20'>
				<div className='text-center '>
					<h2 className='text-2xl font-bold'>New Arrivals</h2>

					{newArrival.length !== 0 ? (
						<div className='flex flex-wrap justify-center gap-16 my-20'>
							{newArrival.map((shoe) => (
								<Card
									shoe={shoe.fields}
									key={shoe.fields.id}
									id={shoe.id}
									tagColor='#FFD369'
									tagText='New Arrival'
								/>
							))}
						</div>
					) : (
						<ProductCardLoader width='100%' />
					)}
				</div>
			</section>
			<section className='container relative mx-auto my-20'>
				<div className='text-center'>
					<h2 className='mb-2 text-2xl font-bold'>Highlights</h2>
					<p className='text-sm font-medium'>
						EXPLORE YOURSELF IN OUR NEW PRODUCTS' HIGHLIGHTS
					</p>

					{highLights.length !== 0 ? (
						<div className='flex flex-wrap justify-center gap-16 my-20'>
							{highLights.map((shoe) => (
								<Card
									shoe={shoe.fields}
									key={shoe.fields.id}
									id={shoe.id}
									tagColor='#f87171'
									tagText='50% Discount'
								/>
							))}
						</div>
					) : (
						<ProductCardLoader width='100%' />
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
