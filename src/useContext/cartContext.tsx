import React, { useState } from "react";
import { cartContextType, cartItemsTypes } from "../../custom";

interface propTypes {
	children: React.ReactNode;
}

export const CartContext = React.createContext<cartContextType | null>(null);

const CartContextProvider: React.FC<propTypes> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<cartItemsTypes>>([]);

	const updateCart = (name: string, quantity: number) => {
		const newCartItems = cartItems;

		const updatedItem = newCartItems.filter((item) => name === item.name)[0];

    console.log(newCartItems)

		if (quantity < 1) {
			// removeFromCart(name);
		} else {
			updatedItem.quantity = quantity;
      setCartItems(newCartItems)
		}
	};

	const addToCart = ({
		name,
		price,
		quantity = 1,
		shoeSize,
		image
	}: cartItemsTypes) => {
		setCartItems((items) => [
			...items,
			{ name, price, quantity, shoeSize, image },
		]);
	};

	const removeFromCart = (name : string, shoeSize : number) => {

    const newCartItems = cartItems;

    const filteredCartItmes = newCartItems.filter((item )=> item.name !== name  && item.shoeSize === shoeSize)


    setCartItems(filteredCartItmes)
	};

	return (
		<CartContext.Provider
			value={{ cartItems, updateCart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
