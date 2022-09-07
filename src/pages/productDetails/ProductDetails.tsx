import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
	cartContextType,
	RecordType,
	ShoeDataContextType,
	shoeType,
	wishlistContextType,
} from "../../../custom";
import { Card } from "../../components";
import {
	CartContext,
	ShoeDataContext,
	WishlistContext,
} from "../../useContext";
import { notify, shoeSizes } from "../../util";

interface shoeDataType extends shoeType {
	relatedProducts: Array<RecordType>;
}

const ProductDetails = () => {
	const navigate = useNavigate();
	const params = useParams();

	const { addToCart, checkIsInCart } = useContext(
		CartContext
	) as cartContextType;
	const { addToWishlist, isInWishlist, removeFromWishlist } = useContext(
		WishlistContext
	) as wishlistContextType;
	const { getShoe, getImages, getRandomShoes } = useContext(
		ShoeDataContext
	) as ShoeDataContextType;

	const [shoe, setShoe] = useState<shoeDataType>({
		name: "",
		description: "",
		price: 0,
		imageUrl: "",
		id: 1,
		colour: "",
		type: "",
		videoUrl: "",
		relatedProducts: [{ createdTime: "", id: "1", fields: [] }],
	});
	const [gallery, setGallery] = useState({ displayImage: "", otherImages: [] });
	const [userChoices, setUserChoices] = useState({
		quantity: 1,
		selectedShoeSize: 38,
		isLiked: false,
		isInCart: false,
	});

	useEffect(() => {
		initProductDetails();
	}, [params.productId]);

	const initProductDetails = async () => {
		const shoeData = await getShoe(params.productId!);
		const imageData = await getImages(shoeData.id);
		const relatedProductData = await getRandomShoes(5);

		setUserChoices({
			...userChoices,
			isLiked: isInWishlist(shoeData.name),
			isInCart: checkIsInCart(shoeData.name),
		});

		setShoe({ ...shoeData, relatedProducts: relatedProductData });

		setGallery({
			displayImage: shoeData.imageUrl,
			otherImages: imageData[0].fields.images
				.split("|")
				.filter((image: string) => image !== ""),
		});

		window.scrollTo(0, 0);
	};

	const handleAddToCart = () => {
		notify("Added to Cart", "🛒");

		setUserChoices({ ...userChoices, isInCart: true });

		addToCart({
			name: shoe.name,
			price: shoe.price,
			quantity: userChoices.quantity,
			shoeSize: userChoices.selectedShoeSize,
			image: shoe.imageUrl,
		});
	};

	const toggleWishlist = () => {
		if (!userChoices.isLiked) {
			addToWishlist({
				name: shoe.name,
				price: shoe.price,
				image: shoe.imageUrl,
			});
			notify("Added to Wishlist", "❤️");
		} else {
			removeFromWishlist(shoe.name);
			notify("Removed from Wishlist", "❤️");
		}

		setUserChoices({ ...userChoices, isLiked: !userChoices.isLiked });
	};

	return (
		<div className='container py-20 mx-auto'>
			{shoe.name !== "" ? (
				<>
					<div className='flex flex-col items-center justify-center gap-16 pb-16 lg:gap-20 lg:pb-32 lg:flex-row'>
						<div className='flex flex-col-reverse items-center gap-2 lg:gap-3 lg:flex-row'>
							<div className='flex justify-center gap-2 lg:justify-start lg:flex-col lg:gap-3'>
								{gallery.otherImages.map((image, index) => {
									return (
										<img
											className='w-10 h-10 cursor-pointer lg:w-12 lg:h-12 brightness-50 hover:brightness-100'
											onMouseEnter={() =>
												setGallery({ ...gallery, displayImage: image })
											}
											onMouseOut={() =>
												setGallery({ ...gallery, displayImage: shoe.imageUrl })
											}
											src={image}
											key={index}
											alt='404'
										/>
									);
								})}
							</div>

							<div className='w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96'>
								<img
									className='object-cover w-full h-full'
									src={gallery.displayImage}
									alt='404'
								/>
							</div>
						</div>

						<div className='flex flex-col gap-2 p-5 lg:gap-3'>
							<h2 className='text-xl font-bold lg:text-5xl text-wrap'>
								{shoe.name}
							</h2>
							<p className='max-w-md text-sm font-light'>{shoe.description}</p>
							<p className='my-4 text-2xl font-medium'>${shoe.price}</p>

							<p className='text-sm font-medium'>
								Shoe Size : {userChoices.selectedShoeSize}
							</p>
							<ul className='flex flex-wrap gap-2 lg:gap-3'>
								{shoeSizes.map((shoeSize, index) => {
									return userChoices.selectedShoeSize === Number(shoeSize) ? (
										<li
											className='p-1 font-medium rounded-md cursor-pointer bg-offwhite lg:text-xl text-darkgrey lg:p-2'
											key={index}
											onClick={() =>
												setUserChoices({
													...userChoices,
													selectedShoeSize: Number(shoeSize),
												})
											}>
											{shoeSize}
										</li>
									) : (
										<li
											className='p-1 font-medium rounded-md cursor-pointer bg-offwhite lg:text-xl text-darkgrey lg:p-2 brightness-50'
											key={index}
											onClick={() =>
												setUserChoices({
													...userChoices,
													selectedShoeSize: Number(shoeSize),
												})
											}>
											{shoeSize}
										</li>
									);
								})}
							</ul>

							<div className='flex items-center gap-5 my-4'>
								{userChoices.isInCart ? (
									<button
										className='px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
										onClick={() => navigate("/urban-society/cart")}>
										View Cart
									</button>
								) : (
									<>
										<div className='flex flex-wrap gap-1'>
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													className='w-5 h-5 rounded-md hoverBackgroundEffect'
													onClick={() =>
														setUserChoices({
															...userChoices,
															quantity: userChoices.quantity - 1,
														})
													}
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
														clipRule='evenodd'
													/>
												</svg>
											</button>
											<div className='w-5 mx-2 font-medium text-center lg:text-2xl lg:mx-5'>
												{userChoices.quantity}
											</div>
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													className='w-5 h-5 rounded-md hoverBackgroundEffect'
													onClick={() =>
														setUserChoices({
															...userChoices,
															quantity: userChoices.quantity + 1,
														})
													}
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
									</>
								)}
							</div>

							<div className='flex items-center gap-1'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-5 h-5'
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
								<p className='text-sm font-light cursor-pointer'>
									Want a discount? Become a member!
								</p>
							</div>
							<div
								className='flex items-center gap-1 cursor-pointer'
								onClick={toggleWishlist}>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-5 h-5'
										fill={userChoices.isLiked ? "#f43f5e" : "transparent"}
										viewBox='0 0 24 24'
										stroke={userChoices.isLiked ? "#f43f5e" : "white"}
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
								</div>
								<p className='text-sm font-light'>
									{userChoices.isLiked
										? "Already in WishList"
										: "Add to Wishlist"}
								</p>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center gap-5 '>
						<h2 className='text-xl font-bold'>Related Products</h2>

						<div className='flex flex-wrap justify-center gap-10 py-10 lg:justify-center lg:gap-20 lg:p-0 lg:py-20'>
							{shoe.relatedProducts.map((record) => (
								<Card shoe={record.fields} key={record.id} id={record.id} />
							))}
						</div>
					</div>
				</>
			) : (
				<div className='container mx-auto my-24 text-center '>
					<PropagateLoader color='#ffffff' size={8} />
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
