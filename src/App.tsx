import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProductList from "./pages/productList/ProductList";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Nav />

			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='category'>
					<Route path=':category' element={<ProductList />} />
				</Route>

				<Route path='wishlist' element={<Wishlist />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
