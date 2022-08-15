import React from "react";

const Nav = () => {
	return (
		<nav className='container flex justify-between items-center sticky top-0 mx-auto p-5 bg-transparent z-10'>
			<h1 className='text-2xl font-black cursor-pointer'>Urban Society</h1>

			<ul className='flex gap-4 font-bold '>
				<li className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'>
					<a href='./men.html'>Men</a>
				</li>
				<li className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'>
					Women
				</li>
				<li className='px-4 py-2 border-b-2  border-transparent  cursor-pointer'>
					Children
				</li>
			</ul>

			<ul className='flex gap-4 font-bold'>
				<li className=' cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clip-rule='evenodd'
						/>
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
							d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
							clip-rule='evenodd'
						/>
					</svg>
				</li>
				<li className=' cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						stroke-width='2'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
						/>
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
