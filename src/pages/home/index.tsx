import React, { useContext, useEffect, useState } from "react";
import { RecordType, ShoeDataContextType } from "../../../custom";
import Card from "../../components/product-card";
import { ShoeDataContext } from "../../useContext";

const Home = () => {
	const [newArrival, setNewArrival] = useState<Array<RecordType>>([]);
	const [highLights, setHighlights] = useState<Array<RecordType>>([]);

	const { getRandomShoes } = useContext(ShoeDataContext) as ShoeDataContextType;

	useEffect(() => {
		initHomePageShoeData();
	}, []);

	const initHomePageShoeData = async () => {
		const shoeData = await getRandomShoes(10);

		console.log(shoeData);

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
					<button className=' py-2 px-4 font-medium text-darkgrey bg-gold'>
						Explore More
					</button>
				</div>
			</section>

			<section className='container relative mx-auto my-20'>
				<div className='text-center '>
					<h2 className='text-2xl font-bold'>New Arrivals</h2>

					<div className='flex flex-wrap justify-center gap-16 my-20'>
						{newArrival.map((shoe, index) => (
							<Card
								shoe={shoe.fields}
								key={shoe.fields.id}
								id={shoe.fields.id}
								tagColor='#FFD369'
								tagText='New Arrival'
							/>
						))}
					</div>
				</div>
			</section>
			<section className='container relative mx-auto my-20'>
				<div className='text-center'>
					<h2 className='mb-2 text-2xl font-bold'>Highlights</h2>
					<p className='text-sm font-medium'>
						EXPLORE YOURSELF IN OUR NEW PRODUCTS' HIGHLIGHTS
					</p>

					<div className='flex flex-wrap justify-center gap-16 my-20'>
						{highLights.map((shoe, index) => (
							<Card
								shoe={shoe.fields}
								key={shoe.fields.id}
								id={shoe.fields.id}
								tagColor='#f87171'
								tagText='50% Discount'
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
