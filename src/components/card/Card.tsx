import React from "react";
import { useNavigate } from "react-router-dom";
import { shoeType } from "../../../custom";

interface propTypes {
	shoe: shoeType;
}

const Card: React.FC<propTypes> = ({ shoe }) => {
	const { name = "", price = 0, imageUrl = "", id = "" } = shoe;

	const navigate = useNavigate();

	const handleClick = () => navigate(`/products/${id}`);

	return (
		<div
			className='p-2 flex flex-col items-center justify-center text-darkgrey text-center bg-white rounded-md shadow-md cursor-pointer transform hover:scale-105 duration-300 ease-in-out'
			onClick={handleClick}>
			<div className='w-40'>
				<img src={imageUrl} alt='404' className='rounded-t-md' />
			</div>

			<p className='w-40 pt-2 font-medium text-base text-ellipsis whitespace-nowrap overflow-hidden '>
				{name}
			</p>
			<p className='pb-2 text-sm'>${price}</p>
		</div>
	);
};

export default Card;
