import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContextType, shoeType, wishlistContextType } from "../../../custom";

import Card from "../../components/card/Card";
import { getProductData, getRelatedProductData } from "../../shoes.data";
import { CartContext } from "../../useContext/cartContext";
import { WishlistContext } from "../../useContext/wishlistContext";

const ProductDetails = () => {
	const params = useParams();

	const { addToCart } = useContext(CartContext) as cartContextType;
	const { addToWishlist } = useContext(WishlistContext) as wishlistContextType;

	const [product, setProduct] = useState<shoeType>({
		name: "",
		description: "",
		price: 0,
		images: [],
		imageUrl: "",
		id: 1,
		colour: "",
		type: "",
		videoUrl: "",
		tags: [],
	});
	const [relatedProducts, setRelatedProducts] = useState<Array<shoeType>>([]);
	const [displayImage, setDisplayImage] = useState<string>("");
	const [quantity, setQuantity] = useState<number>(1);
	const [selectedShoeSize, setShoeSize] = useState<number>(38);

	const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];

	useEffect(() => {
		const productData = getProductData(Number(params.productId));
		const relatedProductData = getRelatedProductData(Number(params.productId));

		setProduct(productData);
		setDisplayImage(productData.imageUrl);
		setRelatedProducts(relatedProductData);
		window.scrollTo(0, 0);
	}, [params.productId]);

	return (
		<div className='container mx-auto py-20'>
			<div className='flex justify-center gap-20 pb-32'>
				<div className='flex gap-3'>
					<div className='flex flex-col gap-3'>
						{product.images.map((image, index) => {
							return (
								<img
									className='w-12 h-12 brightness-50 hover:brightness-100 cursor-pointer'
									onMouseEnter={() => setDisplayImage(image)}
									onMouseOut={() => setDisplayImage(product.imageUrl)}
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

				<div className='flex flex-col gap-3 w-1/2'>
					<h2 className='font-bold text-5xl text-wrap'>{product.name}</h2>
					<p className='font-light text-sm max-w-lg'>{product.description}</p>
					<p className='font-medium text-2xl my-4'>${product.price}</p>

					<p className='font-medium text-sm'>Shoe Size : {selectedShoeSize}</p>
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
									className='h-5 w-5'
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
									className='h-5 w-5'
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
							className='px-4 py-2 font-medium text-xl text-center text-darkgrey bg-gold rounded-sm'
							onClick={() =>
								addToCart({
									name: product.name,
									price: product.price,
									quantity,
									shoeSize: selectedShoeSize,
									image: product.imageUrl,
								})
							}>
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
						<p className='font-light text-sm'>
							{" "}
							Want a discount? Become a member!
						</p>
					</div>
					<div
						className='flex gap-1 items-center'
						onClick={() =>
							addToWishlist({
								name: product.name,
								price: product.price,
								shoeSize: selectedShoeSize,
								image: product.imageUrl,
							})
						}>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								className='h-5 w-5'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<p className='font-light text-sm'> Add to Wishlist </p>
					</div>
				</div>
			</div>

			<div className=' flex flex-col gap-5 items-center'>
				<h2 className='font-bold text-xl'>Related Products</h2>

				<div className='flex flex-wrap justify-center gap-10 py-20'>
					{relatedProducts.map((shoe, index) => {
						return <Card shoe={shoe} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
