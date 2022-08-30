import React, { useContext } from "react";
import { cartContextType, wishlistContextType } from "../../../custom";
import { WishlistContext, CartContext } from "../../useContext";
import { notify } from "../../util";

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
								<div
									className='flex justify-evenly gap-4 lg:justify-center   lg:gap-20 items-center'
									key={index}>
									<div className='w-10 grow md:grow-0 lg:w-16'>
										<img className='object-fit' src={item.image} alt='404' />
									</div>

									<p className='text-left text-ellipsis w-[100px] overflow-hidden whitespace-nowrap lg:w-52 lg:text-2xl'>
										{item.name}
									</p>
									<p className='font-medium text-sm  lg:text-2xl'>
										${item.price}
									</p>

									<div className='gap-4 hidden lg:flex'>
										<button
											className='px-4 py-2 font-medium  bg-danger rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
											onClick={() => removeFromWishlist(item.name)}>
											Remove
										</button>
										<button
											className='px-4 py-2 font-medium text-center text-darkgrey bg-gold rounded-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-md transition-transform'
											onClick={() => {
												notify("Added to Cart", "🛒");
												addToCart({ ...item, shoeSize: 40, quantity: 1 });
											}}>
											Add to Cart
										</button>
									</div>

									<div className='block lg:hidden'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-6 h-6'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
											/>
										</svg>
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
