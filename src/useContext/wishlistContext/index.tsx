import React, { useState } from "react";
import { wishlistContextType, wishlistItemTypes } from "../../../custom";

interface propTypes {
	children: React.ReactNode;
}

export const WishlistContext = React.createContext<wishlistContextType | null>(
	null
);

const WishlistContextProvider: React.FC<propTypes> = ({ children }) => {
	const [wishlistItems, setWishlistItems] = useState<Array<wishlistItemTypes>>(
		[]
	);

	const addToWishlist = ({
		name,
		price,
		shoeSize =40,
		image,
	}: wishlistItemTypes) => {
		console.log(wishlistItems);

		setWishlistItems((items) => [...items, { name, price, shoeSize, image }]);
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
