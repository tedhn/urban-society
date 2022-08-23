import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer, Nav } from "./components";

import "react-toastify/dist/ReactToastify.css";

import {
	Cart,
	Category,
	Home,
	ProductDetails,
	ProductList,
	Search,
	Wishlist,
} from "./pages";
import {
	CartContextProvider,
	ShoeDataContextProvider,
	WishlistContextProvider,
} from "./useContext";

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<ToastContainer />
			<ShoeDataContextProvider>
				<CartContextProvider>
					<WishlistContextProvider>
						<Nav />
						<Routes>
							<Route path='/' element={<Home />} />

							<Route path='category'>
								<Route path='' element={<Category />} />
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
