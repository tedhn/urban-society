import React, { useState } from "react";
import { cartContextType, cartItemsTypes } from "../../../custom";
import { notify } from "../../util";

interface propTypes {
	children: React.ReactNode;
}

export const CartContext = React.createContext<cartContextType | null>(null);

const CartContextProvider: React.FC<propTypes> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<cartItemsTypes>>([]);

	const updateCart = (updates: any) => {
		const newCartItems = cartItems;

		const item = newCartItems.filter((item) => item.name === updates.name)[0];

		if (updates.option.type === "shoeSize") {
			item.shoeSize = updates.option.choice;
		} else if (updates.option.type === "quantity") {
			item.quantity = updates.option.choice;
		}

		const index = newCartItems.findIndex((item) => item.name === updates.name);

		newCartItems.splice(index, 1, item);

		setCartItems(newCartItems);
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

	const removeFromCart = (name: string) => {
		const filteredCartItmes = cartItems.filter((item) => item.name !== name);

		notify("Removed from cart", "🛒");
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
