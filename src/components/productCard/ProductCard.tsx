import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shoeType, wishlistContextType } from "../../../custom";
import { WishlistContext } from "../../useContext/wishlistContext";
import { notify } from "../../util";

interface propTypes {
	shoe: shoeType;
	tagColor?: string;
	tagText?: string;
	id: string;
}

const Card: React.FC<propTypes> = ({ shoe, tagColor, tagText, id }) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const { addToWishlist } = useContext(WishlistContext) as wishlistContextType;



	const navigate = useNavigate();

	const handleClick = () => navigate(`/products/${id}`);

	return (
		<div
			className='relative flex flex-col items-center justify-center text-darkgrey text-center bg-white rounded-md shadow-md hover:scale-110 duration-100 ease-in-out'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<div className='relative w-40 '>
				<img
					src={shoe.imageUrl}
					alt='404'
					className='w-full obejct-cover rounded-t-md'
				/>

				<p
					style={isHover ? { opacity: 1 } : { opacity: 0 }}
					onClick={handleClick}
					className=' absolute bottom-2 w-40 text-center text-xs font-light cursor-pointer hover:underline '>
					More Details
				</p>

				<div
					className='absolute top-5 right-0 px-2 py-1 text-xs font-medium translate-x-1/2'
					style={{ backgroundColor: tagColor }}>
					{tagText}
				</div>
			</div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-5 w-5 absolute top-2 left-2 cursor-pointer'
				style={isHover ? { opacity: 1 } : { opacity: 0 }}
				fill={isLiked ? "#f43f5e" : "white"}
				viewBox='0 0 24 24'
				stroke={isLiked ? "#f43f5e" : "grey"}
				onClick={() => {
					addToWishlist({
						name: shoe.name,
						price: shoe.price,
						shoeSize: 40,
						image: shoe.imageUrl,
					});
					notify("Wishlist", "❤️");
					setIsLiked(!isLiked);
				}}
				strokeWidth='2'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
				/>
			</svg>

			<p className='w-40 p-2 font-medium text-sm text-ellipsis whitespace-nowrap overflow-hidden '>
				{shoe.name}
			</p>
			<p className='pb-2 text-sm'>${shoe.price}</p>
		</div>
	);
};

export default Card;
