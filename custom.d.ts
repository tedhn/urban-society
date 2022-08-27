interface RecordType {
	createdTime: string;
	id: string;
	fields: shoeType | catergoryType | imageType | any;
}
interface shoeType {
	id: number;
	name: string;
	type: string;
	description: string;
	colour: string;
	imageUrl: string;
	videoUrl: string;
	price: number;
}
interface catergoryType {
	id: number;
	name: string;
	image: string;
	title: string;
}
interface imageType {
	id: number;
	images: string;
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

	checkIsInCart: (name: string) => boolean;
}

interface wishlistItemTypes {
	name: string;
	image: string;
	price: number;
}

interface wishlistContextType {
	wishlistItems: Array<wishlistItemTypes>;
	addToWishlist: ({ name, price, image }: wishlistItemTypes) => void;
	removeFromWishlist: (name: string) => void;
	isInWishlist: (name: string) => boolean;
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
	getCategory: (
		category: number,
		total?: number
	) => Promise<any> | Array<RecordType>;
	getShoe: (id: string) => Promise<any> | RecordType;
	getImages: (id: number) => Promise<any> | Array<RecordType>;
	searchShoe: (query: string) => Promise<any> | Array<RecordType>;
	getRandomShoes: (total: number) => Promise<any> | Array<RecordType>;
	getCategoryDetails: (category?: string) => Promise<any> | Array<RecordType>;
}

export {
	shoeType,
	catergoryType,
	cartContextType,
	cartItemsTypes,
	wishlistItemTypes,
	wishlistContextType,
	shoeDataType,
	ShoeDataContextType,
	RecordType,
	imageType,
};
