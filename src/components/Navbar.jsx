import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function Navbar({ setShowCart, showCart }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${showCart ? "disabled" : ""}`}>
      <div className="logo">MyStore</div>

      <div className="nav-right">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button
          className="cart-btn"
          onClick={() => setShowCart(true)}
          disabled={showCart}
        >
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </button>
      </div>
    </nav>
  );
}
