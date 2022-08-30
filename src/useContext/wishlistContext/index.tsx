import React, { useState } from "react";
import { wishlistContextType, wishlistItemTypes } from "../../../custom";
import { notify } from "../../util";

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

	const addToWishlist = ({ name, price, image }: wishlistItemTypes) => {
		setWishlistItems((items) => [...items, { name, price, image }]);
	};

	const removeFromWishlist = (name: string) => {
		const filteredWishlistItmes = wishlistItems.filter(
			(item) => item.name !== name
		);

			notify("Removed from Wishlist", "❤️");
		setWishlistItems(filteredWishlistItmes);
	};

	const isInWishlist = (name: string) => {
		return wishlistItems.filter((item) => item.name === name).length !== 0
			? true
			: false;
	};

	return (
		<WishlistContext.Provider
			value={{
				wishlistItems,
				addToWishlist,
				removeFromWishlist,
				isInWishlist,
			}}>
			{children}
		</WishlistContext.Provider>
	);
};

export default WishlistContextProvider;
