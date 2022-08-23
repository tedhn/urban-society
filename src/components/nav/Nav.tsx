import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContextType } from "../../../custom";
import { CartContext } from "../../useContext";

const Nav = () => {
	const navigate = useNavigate();

	const [isTransparent, setIsTransparent] = useState<boolean>(true);

	const { cartItems } = useContext(CartContext) as cartContextType;

	window.addEventListener("scroll", () => {
		if (window.scrollY > 150) {
			setIsTransparent(false);
		} else {
			setIsTransparent(true);
		}
	});

	const handleNavClick = (category: string) => {
		navigate(`/category/${category}`);
	};

	return (
		<div
			className='sticky top-0 z-20 transition-colors'
			style={
				isTransparent
					? { backgroundColor: "transparent" }
					: { backgroundColor: "#393E46" }
			}>
			<nav className='container flex justify-between items-center  mx-auto p-5'>
				<h1
					className='text-2xl font-black cursor-pointer'
					onClick={() => navigate("/")}>
					Urban Society
				</h1>

				<ul className='flex gap-4 font-bold navOptions'>
					<li
						className='link-underline relative px-4 py-2 hover:cursor-pointer'
						onClick={() => handleNavClick("men")}>
						<span className='relative z-20'>Men</span>
					</li>
					<li
						className='link-underline relative px-4 py-2 hover:cursor-pointer '
						onClick={() => handleNavClick("women")}>
						<span>Women</span>
					</li>
					<li
						className='link-underline relative px-4 py-2 hover:cursor-pointer '
						onClick={() => handleNavClick("kids")}>
						<span>Kids</span>
					</li>
				</ul>

				<ul className='flex font-bold items-center'>
					<li
						className='hoverBackgroundEffect relative p-2  flex items-center gap-3 rounded-md cursor-pointer'
						onClick={() => navigate("/search")}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
								clipRule='evenodd'
							/>
						</svg>
					</li>
					<li
						className='hoverBackgroundEffect relative p-2 rounded-md cursor-pointer'
						onClick={() => navigate("/wishlist")}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
								clipRule='evenodd'
							/>
						</svg>
					</li>
					<li
						className='hoverBackgroundEffect relative p-2 rounded-md cursor-pointer'
						onClick={() => navigate("/cart")}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
						</svg>
						{cartItems.length !== 0 ? (
							<div className='inline-flex absolute top-1 right-1 justify-center items-center w-2 h-2 text-sm font-bold text-white bg-danger rounded-full '></div>
						) : null}
					</li>
					<li className='hoverBackgroundEffect relative p-2 rounded-md cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
								clipRule='evenodd'
							/>
						</svg>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
