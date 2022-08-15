import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HeartSVG } from "../../svg/heart.svg";
import { ReactComponent as CartSVG } from "../../svg/cart.svg";
import { ReactComponent as UserSVG } from "../../svg/user.svg";
import Search from "../search/Search";

interface PropTypes {
	setToggleCart: any;
}

const Nav: React.FC<PropTypes> = ({ setToggleCart }) => {
	const navigate = useNavigate();

	const handleNavClick = (category: string) => {
		navigate(`/category/${category}`);
	};

	return (
		<nav className='container flex justify-between items-center sticky top-0 mx-auto p-5 bg-transparent z-10'>
			<h1
				className='text-2xl font-black cursor-pointer'
				onClick={() => navigate("/")}>
				Urban Society
			</h1>

			<ul className='flex gap-4 font-bold '>
				<li
					className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'
					onClick={() => handleNavClick("men")}>
					Men
				</li>
				<li
					className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'
					onClick={() => handleNavClick("women")}>
					Women
				</li>
				<li
					className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'
					onClick={() => handleNavClick("children")}>
					Children
				</li>
			</ul>

			<ul className='flex gap-4 font-bold items-center'>
				<li className=' cursor-pointer'>
					<Search hidden={true} />
				</li>
				<li className=' cursor-pointer' onClick={() => navigate("/wishlist")}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
							clip-rule='evenodd'
						/>
					</svg>
				</li>
				<li className=' cursor-pointer' onClick={() => setToggleCart(true)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
					</svg>
				</li>
				<li className=' cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
							clip-rule='evenodd'
						/>
					</svg>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
