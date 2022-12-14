import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { RecordType, ShoeDataContextType } from "../../../custom";
import { ShoeDataContext } from "../../useContext";

const Category = () => {
	const navigate = useNavigate();

	const { getCategoryDetails } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	const [categories, setCategories] = useState<Array<RecordType>>([]);

	useEffect(() => {
		initCategoryPage();
	}, []);

	const initCategoryPage = async () => {
		const categories = await getCategoryDetails();

		setCategories(categories);
	};

	const handleClick = (link: string) => navigate(`${link}`);

	return (
		<div className='container mx-auto text-center py-10'>
			<h1 className='font-bold text-xl py-20 lg:text-6xl lg:py-4'>
				Categories
			</h1>
			{categories.length !== 0 ? (
				<div className='flex justify-center items-center gap-4 py-4 flex-col lg:flex-row'>
					{categories.map((category) => {
						return (
							<div
								className='w-96 h-96 relative cursor-pointer '
								key={category.id}>
								<img
									src={category.fields.image}
									alt='404'
									className=' w-full h-full object-cover brightness-75 hover:brightness-50'
									onClick={() => handleClick(category.fields.route)}
								/>
								<div className='absolute top-1/2 left-1/2 font-bold text-offwhite text-4xl -translate-y-1/2 -translate-x-1/2'>
									{category.fields.name}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className='container text-center my-12	'>
					<PropagateLoader color='#ffffff' size={8} />
				</div>
			)}
		</div>
	);
};

export default Category;
