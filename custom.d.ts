declare module "*.svg" {
	import React = require("react");
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

interface shoeType {
	id: number;
	name: string;
	type: string;
	description: string;
	colour: string;
	imageUrl: string;
	videoUrl: string;
	images: string[];
	price: number;
	tags: string[];
}

interface catergoryType {
	id?: number;
	name?: string;
	imageUrl?: string;
}

interface cartItemsTypes {
	name: string;
	image: string;
	price: number;
	quantity: number;
	shoeSize: number;
}

interface cartContextType {
	cartItems: Array<cartItemsTypes>;
	updateCart: (name: string, quantity: number) => void;
	addToCart: ({
		name,
		price,
		quantity,
		shoeSize,
		image,
	}: cartItemsTypes) => void;
	removeFromCart: (name: string, shoeSize) => void;
}

interface wishtlistItemTypes {
	name: string;
	image: string;
	price: number;
	shoeSize: number;
}

interface wishlistContextType {
	wishlistItems: Array<wishlistItemTypes>;
	addToWishlist: ({ name, price, shoeSize, image }: wishlistItemsTypes) => void;
	removeFromWishlist: (name: string) => void;
}

interface shoeDataType {
	name: string;
	price: number;
	description: string;
	colour: string;
	imageUrl: string;
	videoUrl: string;
	type: string;
}

interface ShoeDataContextType {
	getCategory: (category: number, total?: number) => Array;
	getShoe: (id: string) => any;
	getImages: (id: number) => any;
	searchShoe: (query: string) => any;
	getRandomShoes: (total: number) => any;
	getCategoryDetails: (category: string) => any;
}

export {
	shoeType,
	catergoryType,
	cartContextType,
	cartItemsTypes,
	wishtlistItemTypes,
	wishlistContextType,
	shoeDataType,
	ShoeDataContextType,
};
