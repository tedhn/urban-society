import { useState } from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Nav />

			<ProductList />

			<Footer />
		</div>
	);
}

export default App;
