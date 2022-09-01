import React, { useEffect, useRef, useState } from "react";

interface propsTypes {
	type: string;
	label: string;
	options: string[];
	setUpdate?: any;
}

const DropDown: React.FC<propsTypes> = ({
	type,
	label,
	options,
	setUpdate,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const [listening, setListening] = useState(false);

	const menuRef = useRef<any>();

	useEffect(() => {
		if (listening) return;
		if (!menuRef.current) return;
		setListening(true);

		document.addEventListener(`click`, (e) => {
			const cur = menuRef.current;
			const node = e.target;
			if (cur.contains(node)) return;
			setIsOpen(false);
		});

		return () =>
			document.removeEventListener("click", (e) => {
				const cur = menuRef.current;
				const node = e.target;
				if (cur.contains(node)) return;
				setIsOpen(false);
			});
	},[]);

	return (
		<div
			className='flex flex-col items-center justify-center relative'
			ref={menuRef}>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				onClick={() => setIsOpen(!isOpen)}
				className='text-white hoverBackgroundEffect font-medium rounded-lg text-sm px-4 py-0.5 text-center inline-flex items-center e-800'
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
					className='absolute top-full z-10 bg-grey rounded divide-y divide-gray-100 shadow dark:bg-gray-700'>
					<ul
						className='py-1 text-sm text-gray-700 dark:text-white'
						aria-labelledby='dropdownDefault'>
						{options.map((option, index) => {
							return (
								<li key={index}>
									<a
										href='#'
										onClick={() => {
											setUpdate({ type, choice: option });
											setIsOpen(false);
										}}
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
