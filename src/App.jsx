import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './sections/Footer';
import About from './pages/About';
import Services from './pages/service/Servies';
import PrinterSetupPage from './pages/service/PrinterSetupPage';
import ComputerSetupPage from './pages/service/ComputerSetupPage';
import PrinterFormPage from './pages/service/PrinterFormPage';
import ComputerFormPage from './pages/service/ComputerFormPage';
import ContactPage from './pages/Contact';
import Membership from './pages/Memership';
import Disclaimer from './footersections/Disclaimer';
import PrivacyPolicy from './footersections/PrivacyPolicy';
import ReturnRefundPolicy from './footersections/RefundAndReturn';
import TermsAndConditions from './footersections/TermsAndConditions';
import PrinterProductList from './pages/product/ProductsListing';
import ProductDetail from './pages/product/ProductDetail';
import Cart from './pages/product/Cart';
import CartProvider from './pages/product/CartContext';
import JivoChat from './JivoChat';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <JivoChat/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/printersetup" element={<PrinterSetupPage />} />
          <Route path="/computersetup" element={<ComputerSetupPage />} />
          <Route path="/printerformPage" element={<PrinterFormPage />} />
          <Route path="/computerFormPage" element={<ComputerFormPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/product" element={<PrinterProductList />} />
          <Route path="/productdetail/:productID" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

          {/* Footer Sections */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/return-refundpolicy" element={<ReturnRefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>

        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
