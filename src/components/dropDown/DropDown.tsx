import React, { useEffect, useRef, useState } from "react";

interface propsTypes {
	label: string;
	options: string[];
	setSorting?: any;
}

const DropDown: React.FC<propsTypes> = ({ label, options, setSorting }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [listening, setListening] = useState(false);

	const menuRef = useRef<any>();

	useEffect(() => {
		if (listening) return;
		if (!menuRef.current) return;
		setListening(true);

		document.addEventListener(`click`, (evt) => {
			const cur = menuRef.current!;
			const node = evt.target;
			if (cur.contains(node)) return;
			setIsOpen(false);
		});
	});

	return (
		<div
			className='flex flex-col items-center justify-center relative'
			ref={menuRef}>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				onClick={() => setIsOpen(!isOpen)}
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				type='button'>
				{label}
				<svg
					className='ml-2 w-4 h-4'
					aria-hidden='true'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'></path>
				</svg>
			</button>

			{isOpen ? (
				<div
					id='dropdown'
					className='absolute top-full z-10 w-44 bg-grey rounded divide-y divide-gray-100 shadow dark:bg-gray-700'>
					<ul
						className='py-1 text-sm text-gray-700 dark:text-white'
						aria-labelledby='dropdownDefault'>
						{options.map((option, index) => {
							return (
								<li key={index}>
									<a
										href='#'
										onClick={() => setSorting(index)}
										className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-darkgrey dark:hover:text-white'>
										{option}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default DropDown;
