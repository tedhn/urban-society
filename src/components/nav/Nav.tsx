import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HeartSVG } from "../../svg/heart.svg";
import { ReactComponent as CartSVG } from "../../svg/cart.svg";
import { ReactComponent as UserSVG } from "../../svg/user.svg";
import Search from "../search/Search";

const Nav = () => {
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

			<ul className='flex gap-4 font-bold'>
				<li className=' cursor-pointer'>
					<Search hidden={true}/>
				</li>
				<li className=' cursor-pointer' onClick={() => navigate("/wishlist")}>
					<HeartSVG />
				</li>
				<li className=' cursor-pointer'>
					<CartSVG />
				</li>
				<li className=' cursor-pointer'>
					<UserSVG />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
