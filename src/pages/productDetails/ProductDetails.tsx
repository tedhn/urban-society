import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
	cartContextType,
	RecordType,
	ShoeDataContextType,
	shoeType,
	wishlistContextType,
} from "../../../custom";

import {
	Card,
	ProductDetailsLoader,
	ProductCardLoader,
} from "../../components";
import {
	CartContext,
	ShoeDataContext,
	WishlistContext,
} from "../../useContext";
import { notify } from "../../util";

const ProductDetails = () => {
	const params = useParams();

	const { addToCart } = useContext(CartContext) as cartContextType;
	const { addToWishlist } = useContext(WishlistContext) as wishlistContextType;
	const { getShoe, getImages, getRandomShoes } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	const [shoe, setShoe] = useState<shoeType>({
		name: "",
		description: "",
		price: 0,
		imageUrl: "",
		id: 1,
		colour: "",
		type: "",
		videoUrl: "",
	});
	const [images, setImages] = useState<Array<string>>([]);
	const [relatedProducts, setRelatedProducts] = useState<Array<RecordType>>([]);
	const [displayImage, setDisplayImage] = useState<string>("");
	const [quantity, setQuantity] = useState<number>(1);
	const [selectedShoeSize, setShoeSize] = useState<number>(38);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];

	useEffect(() => {
		initProductDetails();
	}, [params.productId]);

	const initProductDetails = async () => {
		const shoeData = await getShoe(params.productId!);
		const imageData = await getImages(shoeData.id);
		const relatedProductData = await getRandomShoes(5);

		setShoe(shoeData);
		setImages(
			imageData[0].fields.images
				.split("|")
				.filter((image: string) => image !== "")
		);

		setDisplayImage(shoeData.imageUrl);
		setRelatedProducts(relatedProductData);
		window.scrollTo(0, 0);
	};

	const handleAddToCart = () => {
		notify("Cart", "🛒");

		addToCart({
			name: shoe.name,
			price: shoe.price,
			quantity,
			shoeSize: selectedShoeSize,
			image: shoe.imageUrl,
		});
	};

	const handleAddToWishList = () => {
		setIsLiked(!isLiked);
		addToWishlist({
			name: shoe.name,
			price: shoe.price,
			shoeSize: selectedShoeSize,
			image: shoe.imageUrl,
		});
		notify("Wishlist", "❤️");
	};

	return (
		<div className='container mx-auto py-20'>
			{shoe.name !== "" ? (
				<>
					<div className='flex justify-center gap-20 pb-32'>
						<div className='flex gap-3'>
							<div className='flex flex-col gap-3'>
								{images.map((image, index) => {
									return (
										<img
											className='w-12 h-12 brightness-50 hover:brightness-100 cursor-pointer'
											onMouseEnter={() => setDisplayImage(image)}
											onMouseOut={() => setDisplayImage(shoe.imageUrl)}
											src={image}
											key={index}
											alt='404'
										/>
									);
								})}
							</div>

							<div className='w-96 h-96'>
								<img
									className='w-full h-full object-cover'
									src={displayImage}
									alt='404'
								/>
							</div>
						</div>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-5xl text-wrap'>{shoe.name}</h2>
							<p className='font-light text-sm max-w-lg'>{shoe.description}</p>
							<p className='font-medium text-2xl my-4'>${shoe.price}</p>

							<p className='font-medium text-sm'>
								Shoe Size : {selectedShoeSize}
							</p>
							<ul className='flex gap-3'>
								{shoeSizes.map((shoeSize, index) => {
									return selectedShoeSize === shoeSize ? (
										<li
											className='bg-offwhite text-xl text-darkgrey font-medium rounded-md p-2 cursor-pointer'
											key={index}
											onClick={() => setShoeSize(shoeSize)}>
											{shoeSize}
										</li>
									) : (
										<li
											className='bg-offwhite text-xl text-darkgrey font-medium rounded-md p-2 cursor-pointer brightness-50'
											key={index}
											onClick={() => setShoeSize(shoeSize)}>
											{shoeSize}
										</li>
									);
								})}
							</ul>

							<div className='flex gap-5 items-center my-4'>
								<div className='flex gap-1 '>
									<button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											className='hoverBackgroundEffect rounded-md h-5 w-5'
											onClick={() => setQuantity(quantity - 1)}
											fill='currentColor'>
											<path
												fillRule='evenodd'
												d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
												clipRule='evenodd'
											/>
										</svg>
									</button>
									<div className='font-medium text-2xl mx-5 w-5 text-center'>
										{quantity}
									</div>
									<button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											className='hoverBackgroundEffect rounded-md h-5 w-5'
											onClick={() => setQuantity(quantity + 1)}
											fill='currentColor'>
											<path
												fillRule='evenodd'
												d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
												clipRule='evenodd'
											/>
										</svg>
									</button>
								</div>

								<button
									className='px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
									onClick={handleAddToCart}>
									Add to Cart
								</button>
							</div>

							<div className='flex gap-1 items-center'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
										/>
									</svg>
								</div>
								<p className='font-light text-sm cursor-pointer'>
									Want a discount? Become a member!
								</p>
							</div>
							<div
								className='flex gap-1 items-center cursor-pointer'
								onClick={handleAddToWishList}>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill={isLiked ? "#f43f5e" : "transparent"}
										viewBox='0 0 24 24'
										stroke={isLiked ? "#f43f5e" : "white"}
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
								</div>
								<p className='font-light text-sm'>
									{isLiked ? "Already in WishList" : "Add to Wishlist"}
								</p>
							</div>
						</div>
					</div>

					<div className=' flex flex-col gap-5 items-center'>
						<h2 className='font-bold text-xl'>Related Products</h2>

						<div className='flex flex-wrap justify-center gap-20 py-20'>
							{relatedProducts.map((record) => {
								return (
									<Card shoe={record.fields} key={record.id} id={record.id} />
								);
							})}
						</div>
					</div>
				</>
			) : (
				<>
					<ProductDetailsLoader width='100%' />
					<ProductCardLoader width='100%' />
				</>
			)}
		</div>
	);
};

export default ProductDetails;
