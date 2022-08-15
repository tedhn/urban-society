import React from "react";

interface PropTypes {
	setToggleCart: any;
}

const Cart: React.FC<PropTypes> = ({ setToggleCart }) => {
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
		<div className='h-screen px-4 absolute z-20 top-0 right-0 text-darkgrey text-center bg-white flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>Your Cart</div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10 absolute top-5 left-5 cursor-pointer'
				onClick={() => setToggleCart(false)}
				viewBox='0 0 20 20'
				fill='currentColor'>
				<path
					fill-rule='evenodd'
					d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
					clip-rule='evenodd'
				/>
			</svg>

			<div className='px-10  flex flex-col gap-10 overflow-y-auto grow'>
				<div className='flex justify-center gap-20'>
					<div className='w-16 h-16'>
						<img className='object-fit' src={data.imageUrl} alt='404' />
					</div>

					<div className='flex flex-col justify-between'>
						<p className='font-medium text-lg'>{data.name}</p>
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
							<div className='font-medium text-lg mx-5'>1</div>
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
					</div>
					<p>${data.price}</p>
				</div>{" "}
				<div className='flex justify-center gap-20'>
					<div className='w-16 h-16'>
						<img className='object-fit' src={data.imageUrl} alt='404' />
					</div>

					<div className='flex flex-col justify-between'>
						<p className='font-medium text-lg'>{data.name}</p>
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
							<div className='font-medium text-lg mx-5'>1</div>
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
					</div>
					<p>${data.price}</p>
				</div>{" "}
			</div>

			<div className='relative right-0 bottom-0 mt-10 px-10'>
				<div className='flex justify-end text-end'>
					<p className='font-medium text-lg'>Total</p>
					<p className='ml-10 font-medium text-lg'>$999</p>
				</div>

				<button className='mt-5 mb-10 px-4 py-2 font-medium text-xl text-center text-darkgrey bg-gold rounded-sm'>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
