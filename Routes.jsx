import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Header from "./src/components/Header";
import Checkout from "./src/pages/checkout/Checkout";
import OrderConfirmed from "./src/pages/orderConfirmed/OrderConfirmed";
import { CartProvider } from "./src/context/CartContext";
function RoutesApp() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order_confimed" element={<OrderConfirmed />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
export default RoutesApp;
