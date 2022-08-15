import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
	const navigate = useNavigate();

	const handleClick = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	return (
		<div
			className='text-darkgrey text-center bg-white rounded-md shadow-md cursor-pointer'
			onClick={() => handleClick(1)}>
			<div className='w-40'>
				<img
					src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hhbg01fgmufmdu6go6u0/lebron-17-basketball-shoe-FKCmbK.jpg'
					alt='404'
					className='rounded-t-md'
				/>
			</div>

			<div className='font-medium py-2'>
				<p className='text-base'>LeBron 17</p>
				<p className='text-sm'>$260</p>
			</div>
		</div>
	);
};

export default Card;
