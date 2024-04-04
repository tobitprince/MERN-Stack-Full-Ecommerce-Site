import {Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/Home';
import Footer from './components/layout/Footer';
import ProductDetails from './components/product/ProductDetails'
function App() {
  return (
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
