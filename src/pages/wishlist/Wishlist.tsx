import React, { useContext } from "react";
import { cartContextType, wishlistContextType } from "../../../custom";
import { WishlistContext, CartContext } from "../../useContext";

const Wishlist = () => {
	const { wishlistItems, removeFromWishlist } = useContext(
		WishlistContext
	) as wishlistContextType;
	const { addToCart } = useContext(CartContext) as cartContextType;

	return (
		<div className='container mx-auto px-4 pb-10 text-center bg-darkgrey flex flex-col'>
			<h2 className='mt-10 font-bold text-5xl mb-10'>WishList</h2>

			<div className='flex flex-col gap-5 px-10'>
				{wishlistItems.length !== 0 ? (
					<>
						{wishlistItems.map((item, index) => {
							return (
								<div className='flex justify-center items-center' key={index}>
									<div className='w-16'>
										<img
											className=' w-full object-cover'
											src={item.image}
											alt='404'
										/>
									</div>

									<p className='grow text-left mx-5'>{item.name}</p>
									<p className=' mx-5'>${item.price}</p>

									<div className='flex gap-5'>
										<button
											className='px-4 py-2 font-medium  bg-danger rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
											onClick={() => removeFromWishlist(item.name)}>
											X
										</button>
										<button
											className='px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
											onClick={() => addToCart({ ...item, quantity: 1 })}>
											Add to Cart
										</button>
									</div>
								</div>
							);
						})}
					</>
				) : (
					<div>Wishlist is empty</div>
				)}
			</div>
		</div>
	);
};

export default Wishlist;
