import React from 'react';
import  './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './pages/about';
import Download from './pages/download';
import Contact from './pages/contact';
import Product from './pages/product';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


function App() {

return (
	
	<Router>
	<Navbar />
	<addfield  />

	<Routes>
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/download' element={<Download   />} />
		<Route path='/product' element={<Product/>} />
	</Routes>
	</Router>

	);
}

export default App;
