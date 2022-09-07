import React, { useContext, useEffect, useState } from "react";
import { DropDown } from "..";
import { cartContextType, cartItemsTypes } from "../../../custom";
import { CartContext } from "../../useContext";
import { shoeSizes, quantity } from "../../util";

interface propTypes {
	item: cartItemsTypes;
	setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const ListItem: React.FC<propTypes> = ({ item, setTotalPrice }) => {
	const { updateCart, removeFromCart } = useContext(
		CartContext
	) as cartContextType;

	const [value, setValue] = useState(0);

	useEffect(() => {
		setValue(item.quantity);
	}, []);

	const updatedValues = (updates: any) => {
		updateCart(updates);
		console.log(updates.option.choice);
		setTotalPrice((totalPrice: number) => {
			console.log(
				totalPrice + item.price * (Number(updates.option.choice) - value)
			);
			return totalPrice + item.price * (Number(updates.option.choice) - value);
		});
		setValue(Number(updates.option.choice));
	};

	return (
		<div className='flex justify-evenly items-center gap-4 lg:justify-center my-1 lg:gap-20'>
			<div className='w-10 grow lg:w-16'>
				<img className='object-fit' src={item.image} alt='404' />
			</div>

			<div className='flex grow  flex-col justify-start items-start lg:flex-row  lg:justify-between'>
				<p className='text-left text-ellipsis w-[100px] overflow-hidden whitespace-nowrap lg:w-52 lg:text-lg'>
					{item.name}
				</p>
				<div className='flex items-center gap-1 font-medium text-sm  lg:text-lg'>
					Shoe Size :{" "}
					<span className='font-light'>
						<DropDown
							type='shoeSize'
							label={item.shoeSize + ""}
							options={shoeSizes}
							setUpdate={(option: { type: string; option: string }) =>
								updatedValues({ name: item.name, option })
							}
						/>
					</span>
				</div>
				<div className='flex items-center gap-1 font-medium text-sm lg:text-lg'>
					Quantity :
					<DropDown
						type='quantity'
						label={item.quantity + ""}
						options={quantity}
						setUpdate={(option: { type: string; option: string }) =>
							updatedValues({ name: item.name, option })
						}
					/>
				</div>
			</div>

			<p className='font-medium w-20 lg:text-lg'>
				${item.price * item.quantity}
			</p>

			<button
				className='bg-danger px-4 py-2 rounded-md font-bold hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
				onClick={() => removeFromCart(item.name, item.shoeSize)}>
				X
			</button>
		</div>
	);
};

export default ListItem;
