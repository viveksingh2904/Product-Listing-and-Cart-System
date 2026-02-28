import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Footer from "./components/footer"; // ✅ Footer Import

function App() {
  const [showCart, setShowCart] = useState(false);

  // ✅ Scroll Disable When Cart Open
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCart]);

  return (
    <>
      <Navbar setShowCart={setShowCart} showCart={showCart} />
      <Home />
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Footer /> {/* ✅ Footer Added Here */}
    </>
  );
}

export default App;
