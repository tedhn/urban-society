import React, { useContext, useEffect, useState } from "react";
import { cartContextType } from "../../../custom";
import { CartContext } from "../../useContext/cartContext";

const Cart: React.FC = () => {
	const { cartItems, updateCart, removeFromCart } = useContext(
		CartContext
	) as cartContextType;

	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		const priceList = cartItems.map((item) => item.price * item.quantity);

		setTotalPrice(priceList.reduce((total = 0, price) => total + price, 0));
	});

	return (
		<div className='container mx-auto px-4 text-center bg-darkgrey flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>Your Cart</div>

			<div className='container  mx-auto px-10  flex flex-col gap-10 overflow-y-auto grow'>
				{cartItems.length !== 0 ? (
					<>
						{cartItems.map((item, index) => {
							return (
								<div
									className='flex justify-evenly items-center gap-20'
									key={index}>
									<div className='w-16 h-16'>
										<img className='object-fit' src={item.image} alt='404' />
									</div>

									<p className='font-medium text-sm grow text-left'>
										{item.name}
									</p>
									<p className='font-medium text-sm '>
										Shoe Size : {item.shoeSize}
									</p>
									<div className='flex gap-1'>
										<button>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												className='hoverBackgroundEffect rounded-md h-5 w-5'
												onClick={() => updateCart(item.name, item.quantity - 1)}
												fill='currentColor'>
												<path
													fillRule='evenodd'
													d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
													clipRule='evenodd'
												/>
											</svg>
										</button>
										<div className='font-medium text-lg mx-5'>
											{item.quantity}
										</div>
										<button>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												className='hoverBackgroundEffect rounded-md h-5 w-5'
												onClick={() => updateCart(item.name, item.quantity + 1)}
												fill='currentColor'>
												<path
													fillRule='evenodd'
													d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
													clipRule='evenodd'
												/>
											</svg>
										</button>
									</div>
									<p>${item.price * item.quantity}</p>

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
