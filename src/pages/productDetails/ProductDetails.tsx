import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
	cartContextType,
	RecordType,
	ShoeDataContextType,
	shoeType,
	wishlistContextType,
} from "../../../custom";
import {
	Card
} from "../../components";
import {
	CartContext,
	ShoeDataContext,
	WishlistContext,
} from "../../useContext";
import { notify } from "../../util";

interface shoeDataType extends shoeType {
	relatedProducts : Array<RecordType>
}

const ProductDetails = () => {
	const navigate = useNavigate();
	const params = useParams();

	const {  addToCart, checkIsInCart } = useContext(
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
		relatedProducts: [ {createdTime : "" , id : "1" ,  fields :[]}],
	});
	const [gallery , setGallery] = useState({displayImage : '' , otherImages : [] })
	const [userChoices , setUserChoices] = useState({quantity : 1 , selectedShoeSize : 38 , isLiked :false , isInCart : false})

	const shoeSizes = [38, 39, 40, 41, 42, 43, 44, 45];

	useEffect(() => {
		initProductDetails();
	}, [params.productId]);

	const initProductDetails = async () => {
		const shoeData = await getShoe(params.productId!);
		const imageData = await getImages(shoeData.id);
		const relatedProductData = await getRandomShoes(5);


		setUserChoices({...userChoices , isLiked : isInWishlist(shoeData.name) ,  isInCart : checkIsInCart(shoeData.name)})

		setShoe({...shoeData , relatedProducts : relatedProductData});

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

		setUserChoices({...userChoices , isInCart: true})

		addToCart({
			name: shoe.name,
			price: shoe.price,
			quantity : userChoices.quantity,
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

			setUserChoices({ ...userChoices, isLiked : !userChoices.isLiked });
	};

	return (
		<div className='container mx-auto py-20'>
			{shoe.name !== "" ? (
				<>
					<div className='flex flex-col justify-center items-center gap-16 lg:gap-20 pb-16 lg:pb-32 lg:flex-row'>
						<div className='flex flex-col-reverse items-center gap-2 lg:gap-3 lg:flex-row'>
							<div className='flex justify-center gap-2 lg:justify-start lg:flex-col lg:gap-3'>
								{gallery.otherImages.map((image, index) => {
									return (
										<img
											className='w-10 h-10 lg:w-12 lg:h-12 brightness-50 hover:brightness-100 cursor-pointer'
											onMouseEnter={() => setGallery({...gallery , displayImage : image})}
											onMouseOut={() => setGallery({...gallery , displayImage : shoe.imageUrl})}
											src={image}
											key={index}
											alt='404'
										/>
									);
								})}
							</div>

							<div className='w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96'>
								<img
									className='w-full h-full object-cover'
									src={gallery.displayImage}
									alt='404'
								/>
							</div>
						</div>

						<div className='flex flex-col gap-2 lg:gap-3 p-5'>
							<h2 className='font-bold text-xl lg:text-5xl text-wrap'>
								{shoe.name}
							</h2>
							<p className='font-light text-sm max-w-md'>{shoe.description}</p>
							<p className='font-medium text-2xl my-4'>${shoe.price}</p>

							<p className='font-medium text-sm'>
								Shoe Size : {userChoices.selectedShoeSize}
							</p>
							<ul className='flex gap-2 lg:gap-3 flex-wrap'>
								{shoeSizes.map((shoeSize, index) => {
									return userChoices.selectedShoeSize === shoeSize ? (
										<li
											className='bg-offwhite p-1 lg:text-xl text-darkgrey font-medium rounded-md lg:p-2 cursor-pointer'
											key={index}
											onClick={() =>
												setUserChoices({
													...userChoices,
													selectedShoeSize: shoeSize,
												})
											}>
											{shoeSize}
										</li>
									) : (
										<li
											className='bg-offwhite  p-1 lg:text-xl text-darkgrey font-medium rounded-md lg:p-2 cursor-pointer brightness-50'
											key={index}
											onClick={() =>
												setUserChoices({
													...userChoices,
													selectedShoeSize: shoeSize,
												})
											}>
											{shoeSize}
										</li>
									);
								})}
							</ul>

							<div className='flex gap-5 items-center my-4'>
								{userChoices.isInCart ? (
									<button
										className='px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
										onClick={() => navigate("/cart")}>
										View Cart
									</button>
								) : (
									<>
										<div className='flex gap-1 flex-wrap'>
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													className='hoverBackgroundEffect rounded-md h-5 w-5'
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
											<div className='font-medium mx-2 lg:text-2xl lg:mx-5 w-5 text-center'>
												{userChoices.quantity}
											</div>
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													className='hoverBackgroundEffect rounded-md h-5 w-5'
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
								onClick={toggleWishlist}>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
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
								<p className='font-light text-sm'>
									{userChoices.isLiked
										? "Already in WishList"
										: "Add to Wishlist"}
								</p>
							</div>
						</div>
					</div>

					<div className=' flex flex-col gap-5 items-center'>
						<h2 className='font-bold text-xl'>Related Products</h2>

						<div className='flex flex-wrap justify-center gap-10 py-10 lg:justify-center lg:gap-20  lg:p-0 lg:py-20'>
							{shoe.relatedProducts.map((record) => (
								<Card shoe={record.fields} key={record.id} id={record.id} />
							))}
						</div>
					</div>
				</>
			) : (
				<div className='container text-center mx-auto my-24	'>
					<PropagateLoader color='#ffffff' size={8} />
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
