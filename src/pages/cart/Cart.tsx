import React, { useContext, useEffect, useState } from "react";
import { cartContextType } from "../../../custom";
import { ListItem } from "../../components";
import { CartContext } from "../../useContext";

const Cart: React.FC = () => {
	const { cartItems } = useContext(CartContext) as cartContextType;

	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		const prices = cartItems.map((item) => item.price * Number(item.quantity));

		const totalPrice = prices.reduce(
			(totalPrice, price) => totalPrice + price,
			0
		);

		setTotalPrice(totalPrice);
	}, [cartItems]);

	return (
		<div className='container mx-auto px-4 text-center bg-darkgrey flex flex-col'>
			<div className='mt-10 font-bold text-5xl mb-10'>Your Cart</div>

			<div className='container  mx-auto lg:px-10  flex flex-col lg:gap-10 grow'>
				{cartItems.length !== 0 ? (
					<>
						{cartItems.map((item, index) => {
							return (
								<ListItem
									key={index}
									item={item}
									setTotalPrice={setTotalPrice}
								/>
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
