import React, { useState } from "react";
import { wishlistContextType, wishtlistItemTypes } from "../../custom";

interface propTypes {
	children: React.ReactNode;
}

export const WishlistContext = React.createContext<wishlistContextType | null>(
	null
);

const WishlistContextProvider: React.FC<propTypes> = ({ children }) => {
	const [wishlistItems, setWishlistItems] = useState<Array<wishtlistItemTypes>>(
		[]
	);

	const addToWishlist = ({
		name,
		price,
		shoeSize,
		image,
	}: wishtlistItemTypes) => {
    console.log(wishlistItems)

		setWishlistItems((items) => [
			...items,
			{ name, price, shoeSize, image },
		]);
	};

	const removeFromWishlist = (name: string) => {
		const newWishlistItems = wishlistItems;

		const filteredWishlistItmes = newWishlistItems.filter(
			(item) => item.name !== name
		);

		setWishlistItems(filteredWishlistItmes);
	};

	return (
		<WishlistContext.Provider
			value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
			{children}
		</WishlistContext.Provider>
	);
};

export default WishlistContextProvider;
