import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/shop/:id" element={<ProductDetails />} /> */}
            <Route path="/contact" element={<Contacts />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
