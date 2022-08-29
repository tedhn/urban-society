import React, { useState } from "react";
import { cartContextType, cartItemsTypes } from "../../../custom";

interface propTypes {
	children: React.ReactNode;
}

export const CartContext = React.createContext<cartContextType | null>(null);

const CartContextProvider: React.FC<propTypes> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<cartItemsTypes>>([]);

	const updateCart = (name: string, quantity: number) => {
		const newCartItems = cartItems;

		const updatedItem = newCartItems.filter((item) => name === item.name)[0];

    //need help on this part
		// problem : state does not update on click but the data changes
		// problem : how to remove item from array if < 0

		console.log(updatedItem);
		if (quantity < 1) {
			// removeFromCart(name);
		} else {
			updatedItem.quantity = quantity;
			setCartItems(newCartItems);
		}
	};

	const addToCart = ({
		name,
		price,
		quantity = 1,
		shoeSize = 40,
		image,
	}: cartItemsTypes) => {
		setCartItems((items) => [
			...items,
			{ name, price, quantity, shoeSize, image },
		]);
	};

	const removeFromCart = (name: string, shoeSize: number) => {
		const newCartItems = cartItems;

		const filteredCartItmes = newCartItems.filter(
			(item) => item.name !== name && item.shoeSize === shoeSize
		);

		setCartItems(filteredCartItmes);
	};

	const checkIsInCart = (name: string) => {
		return cartItems.filter((item) => item.name === name).length !== 0
			? true
			: false;
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				updateCart,
				addToCart,
				removeFromCart,
				checkIsInCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
