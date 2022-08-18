import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductList from "./pages/productList/ProductList";
import Wishlist from "./pages/wishlist/Wishlist";
import CartContextProvider from "./useContext/cartContext";
import WishlistContextProvider from "./useContext/wishlistContext";

function App() {
	return (
		<div className=''>
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

						<Route path='wishlist' element={<Wishlist />} />
						<Route path='cart' element={<Cart />} />
					</Routes>{" "}
					<Footer />
				</WishlistContextProvider>
			</CartContextProvider>
		</div>
	);
}

export default App;
