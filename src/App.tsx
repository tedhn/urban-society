import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Nav from "./components/nav";

import { Cart, Home , ProductDetails, ProductList, Search, Wishlist  } from "./pages";
import { CartContextProvider, ShoeDataContextProvider, WishlistContextProvider } from "./useContext";



function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<ShoeDataContextProvider>
			<CartContextProvider>
				<WishlistContextProvider>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='category'>
							<Route path=':category' element={<ProductList />} />
						</Route>

						<Route path='products'>
							<Route path=':productId' element={<ProductDetails />} />
						</Route>
						<Route path='search' element={<Search />} />

						<Route path='wishlist' element={<Wishlist />} />
						<Route path='cart' element={<Cart />} />
					</Routes>
					<Footer />
				</WishlistContextProvider>
			</CartContextProvider>
			</ShoeDataContextProvider>
		</div>
	);
}

export default App;
