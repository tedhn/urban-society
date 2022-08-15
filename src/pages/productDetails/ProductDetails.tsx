import React from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Plus } from "../../svg/plus.svg";
import { ReactComponent as Minus } from "../../svg/minus.svg";
import { ReactComponent as Comment } from "../../svg/commnet.svg";
import Card from "../../components/card/Card";

const ProductDetails = () => {
	const params = useParams();

	const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];

	const data = {
		id: 11,
		type: "Basketball Shoe",
		name: "Nike Air Force Max II",
		description:
			"The game has gone small, so bigs have to be faster, more agile and more versatile to stay relevant. Keeping pace with ever-evolving player needs, the Nike Air Force Max II provides the responsive cushioning that allows big players to keep crashing the boards and banging in the post, while helping them stay light and quick on the break.",
		colour: "Blue Fury/White/Bright Crimson",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f1b41126-3c6d-479b-9012-5296c261531f/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
		videoUrl: "",
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/716d170f-6ac4-44e6-becd-28e45c1e2dc6/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/513dfe43-6624-4657-9ea2-8f520d81fd39/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/716d170f-6ac4-44e6-becd-28e45c1e2dc6/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4c9aac0b-43c8-477f-b197-31065b8d0355/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7044efab-f578-49bd-bd7f-8b26778f341a/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac217332-112d-42e2-9eeb-64604b99d49c/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d7e73a6a-c075-4c07-9bc5-065c02ecd9ca/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cb5c91f0-8e02-4d57-a2c0-9df7a266805d/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
		],
		price: 165,
		tags: ["lifestyle", "basketball"],
	};

	return (
		<div className='container mx-auto py-20'>
			<div className='flex justify-center gap-20 pb-32'>
				<div className='flex gap-3'>
					<div className='flex flex-col gap-3'>
						<img className='w-16 h-16' src={data.images[0]} alt='404' />
						<img className='w-16 h-16' src={data.images[2]} alt='404' />
						<img className='w-16 h-16' src={data.images[3]} alt='404' />
					</div>

					<div className='w-96 h-96'>
						<img
							className='w-full h-full object-cover'
							src={data.imageUrl}
							alt='404'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-3'>
					<h2 className='font-bold text-5xl'>{data.name}</h2>
					<p className='font-light text-sm max-w-lg'>{data.description}</p>
					<p className='font-medium text-2xl my-4'>${data.price}</p>

					<p className='font-medium text-sm'>Shoe Size</p>
					<ul className='flex gap-3'>
						{shoeSizes.map((shoeSize, index) => (
							<li className='bg-offwhite text-xl text-darkgrey font-medium rounded-md p-2 cursor-pointer' key={index}>
								{shoeSize}
							</li>
						))}
					</ul>

					<div className='flex gap-5 items-center my-4'>
						<div className='flex gap-1 '>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									className='h-5 w-5'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
										clip-rule='evenodd'
									/>
								</svg>
							</button>
							<div className='font-medium text-2xl mx-5'>1</div>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									className='h-5 w-5'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
										clip-rule='evenodd'
									/>
								</svg>
							</button>
						</div>

						<button className='px-4 py-2 font-medium text-xl text-center text-darkgrey bg-gold rounded-sm'>
							Add to Cart
						</button>
					</div>

					<div className='flex gap-1 items-center'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								stroke-width='2'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
								/>
							</svg>
						</div>
						<p className='font-light text-sm'>
							{" "}
							Want a discount? Become a member!
						</p>
					</div>
					<div className='flex gap-1 items-center'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								className='h-5 w-5'
								fill='currentColor'>
								<path
									fill-rule='evenodd'
									d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						<p className='font-light text-sm'> Add to Wishlist </p>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-5 items-center'>
				<h2 className='font-bold text-xl'>
					Recommended based on your shopping trends
				</h2>

				<div className='flex gap-10 py-20'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
