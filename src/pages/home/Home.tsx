import React, { useEffect, useState } from "react";
import { shoeType } from "../../../custom";
import Card from "../../components/card/Card";
import { getHighlights, getNewArrivals } from "../../shoes.data";

const Home = () => {
	const [newArrival, setNewArrival] = useState<Array<shoeType>>([]);

	const [highLights, setHighlights] = useState<Array<shoeType>>([]);

	useEffect(() => {
		const newArrivalData = getNewArrivals();
		const highlightsData = getHighlights();

		setNewArrival(newArrivalData);
		setHighlights(highlightsData);
	});

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

					<div className='flex flex-wrap justify-center gap-10 my-20'>
						{newArrival.map((shoe, index) => (
							<Card shoe={shoe} key={index} />
						))}
					</div>

					<button className='mx-auto py-2 px-4 font-medium text-darkgrey bg-gold rounded-sm'>
						See More
					</button>
				</div>
			</section>
			<section className='container relative mx-auto my-20'>
				<div className='text-center'>
					<h2 className='mb-2 text-2xl font-bold'>Highlights</h2>
					<p className='text-sm font-medium'>
						EXPLORE YOURSELF IN OUR NEW PRODUCTS' HIGHLIGHTS
					</p>

					<div className='flex flex-wrap justify-center gap-10 my-20'>
						{highLights.map((shoe, index) => (
							<Card shoe={shoe} key={index} />
						))}
					</div>

					<button className='mx-auto py-2 px-4 font-medium text-darkgrey bg-gold rounded-sm'>
						See More
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
