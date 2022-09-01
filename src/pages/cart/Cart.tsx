import React, { useContext, useEffect, useState } from "react";
import { cartContextType } from "../../../custom";
import { DropDown } from "../../components";
import { CartContext } from "../../useContext";
import { shoeSizes } from "../../util";

const Cart: React.FC = () => {
	const { cartItems, updateCart, removeFromCart } = useContext(
		CartContext
	) as cartContextType;

	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [isUpdated, setIsUpdated] = useState(false);

	const updatedValues = (updates: any) => {
		updateCart(updates);

		setIsUpdated(!isUpdated);
	};

	const quantity = ["1", "2", "3", "4", "5"];

	useEffect(() => {
		const priceList = cartItems.map((item) => item.price * item.quantity);

		setTotalPrice(priceList.reduce((total = 0, price) => total + price, 0));
	}, [isUpdated]);

	return (
		<div className='container mx-auto px-4 text-center bg-darkgrey flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>Your Cart</div>

			<div className='container  mx-auto lg:px-10  flex flex-col lg:gap-10 grow'>
				{cartItems.length !== 0 ? (
					<>
						{cartItems.map((item, index) => {
							return (
								<div
									className='flex justify-evenly items-center gap-4 lg:justify-center lg:gap-20'
									key={index}>
									<div className='w-10 grow md:grow-0 lg:w-16'>
										<img className='object-fit' src={item.image} alt='404' />
									</div>

									<div className='flex grow flex-col justify-start items-start lg:flex-row lg:grow lg:justify-between'>
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
													setUpdate={(option: {
														type: string;
														option: string;
													}) => updatedValues({ name: item.name, option })}
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

									<p className='font-medium lg:text-lg'>
										${item.price * item.quantity}
									</p>

									<button
										className='bg-danger px-4 py-2 rounded-md font-bold hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
										onClick={() => removeFromCart(item.name, item.shoeSize)}>
										X
									</button>
								</div>
							);
						})}
						<div className='container mx-auto relative right-0 bottom-0 mt-10 px-10'>
							<div className='flex justify-end text-end'>
								<p className='font-medium text-lg'>Total</p>
								<p className='ml-10 font-medium text-lg'>${totalPrice}</p>
							</div>

							<button className='mt-5 mb-10 px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'>
								Checkout
							</button>
						</div>
					</>
				) : (
					<div>Cart is empty</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
