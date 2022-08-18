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
	updateCart: (name : string , quantity : number) => void;
	addToCart: ({name, price, quantity, shoeSize , image} : cartItemsTypes) => void;
	removeFromCart: (name : string , shoeSize) => void;
}


export { shoeType, catergoryType, cartContextType, cartItemsTypes };
