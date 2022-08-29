import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContextType } from "../../../custom";
import { CartContext } from "../../useContext";
import { DropDown } from "../index";

const Nav = () => {
	const navigate = useNavigate();

	const [isTransparent, setIsTransparent] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { cartItems } = useContext(CartContext) as cartContextType;

	window.addEventListener("scroll", () => {
		if (window.scrollY > 150) {
			setIsTransparent(false);
		} else {
			setIsTransparent(true);
		}
	});

	const handleNavClick = (category: string) => {
		navigate(`/urban-society/category/${category}`);
	};

	return (
		<div
			className='sticky top-0 z-20 transition-colors'
			style={
				isTransparent
					? { backgroundColor: "transparent" }
					: { backgroundColor: "#393E46" }
			}>
			<nav className='container flex justify-between items-center gap-5  mx-auto p-5'>
				<h1
					className='text-2xl font-black cursor-pointer'
					onClick={() => navigate("urban-society")}>
					Urban Society
				</h1>
				<div className='lg:flex flex-grow justify-between'>
					<ul className=' navOptions hidden gap-4 font-bold lg:flex'>
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

					<ul
						className='hidden font-light text-sm items-center lg:flex'
						id='navbar-default'>
						<li
							className='hoverBackgroundEffect flex items-center gap-3  relative p-2 rounded-md cursor-pointer'
							onClick={() => navigate("/urban-society/search")}>
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
							Search
						</li>
						<li
							className='hoverBackgroundEffect flex items-center gap-3  relative p-2 rounded-md cursor-pointer'
							onClick={() => navigate("/urban-society/wishlist")}>
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
							Wishlist
						</li>
						<li
							className='hoverBackgroundEffect flex items-center gap-3  relative p-2 rounded-md cursor-pointer'
							onClick={() => navigate("/urban-society/cart")}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
							</svg>
							Cart
							{cartItems.length !== 0 ? (
								<div className='text-sm font-bold px-2 bg-danger text-white rounded-full '>
									{cartItems.length}
								</div>
							) : null}
						</li>
					</ul>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:hidden'
					type='button'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 transition-transform'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
				<div
					className={
						"lg:hidden absolute top-0 -right-44 w-44 h-screen z-10 bg-grey rounded divide-y divide-gray-100 shadow  transition-transform duration-300 " +
						(isOpen ? "-translate-x-44" : "hidden")
					}>
					<ul
						className='flex flex-col justify-around text-sm text-gray-700 dark:text-white'
						aria-labelledby='dropdownDefault'>
						<div
							onClick={() => setIsOpen(!isOpen)}
							className='hoverBackgroundEffect p-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</div>
						<li
							onClick={() => handleNavClick("men")}
							className='hoverBackgroundEffect p-2'>
							<span className='relative z-20'>Men</span>
						</li>
						<li
							onClick={() => handleNavClick("women")}
							className='hoverBackgroundEffect p-2'>
							<span>Women</span>
						</li>
						<li
							onClick={() => handleNavClick("kids")}
							className='hoverBackgroundEffect p-2'>
							<span>Kids</span>
						</li>
						<li
							onClick={() => navigate("/urban-society/search")}
							className='hoverBackgroundEffect p-2'>
							Search
						</li>
						<li
							onClick={() => navigate("/urban-society/wishlist")}
							className='hoverBackgroundEffect p-2'>
							Wishlist
						</li>
						<li
							onClick={() => navigate("/urban-society/cart")}
							className='hoverBackgroundEffect p-2 flex gap-2'>
							Cart
							{cartItems.length !== 0 ? (
								<div className='text-sm font-light px-2 bg-danger text-white rounded-full '>
									{cartItems.length}
								</div>
							) : null}
						</li>
					</ul>
				</div>

				{/* <ul
					className={
						" absolute top-0 right-0 h-screen w-48 bg-grey text-white lg:hidden " +
						(isOpen ? "flex flex-col items-start p-4" : "hidden")
					}>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Women</li>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Men</li>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Kids</li>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Search</li>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Wishlist</li>
					<li className='hoverBackgroundEffect p-2  rounded-md '>Cart</li>
				</ul> */}
			</nav>
		</div>
	);
};

export default Nav;
