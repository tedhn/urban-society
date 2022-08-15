import React from "react";

const Wishlist = () => {
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
		<div className='container mx-auto text-center'>
			<h2 className='font-black text-4xl py-20'>WishList</h2>

			<div className='flex justify-center items-center gap-20'>
				<div className='w-16 h-16'>
					<img className='object-fit' src={data.imageUrl} alt='404' />
				</div>

				<p>{data.name}</p>
				<p>${data.price}</p>

				<div className='flex gap-5'>
					<button className='px-4 py-2 font-medium text-xl text-center text-offwhite bg-danger rounded-sm'>
						Remove
					</button>
					<button className='px-4 py-2 font-medium text-xl text-center text-darkgrey bg-gold rounded-sm'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
