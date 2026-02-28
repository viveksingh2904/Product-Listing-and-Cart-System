import { useCart } from "../context/CartContext";

export default function Cart({ showCart, setShowCart }) {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!showCart) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        <h2 className="cart-title">🛒 Your Cart</h2>

        {cart.length === 0 && <p className="empty-cart">Your cart is empty</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            {/* ✅ FIXED IMAGE SOURCE */}
            <img src={item.thumbnail} alt={item.title} className="cart-img" />

            <div className="cart-details">
              <h4 className="cart-name">{item.title}</h4>
              <p className="cart-price">₹{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h3 className="cart-total">Total: ₹{totalPrice}</h3>
          </>
        )}

        <button
          className="checkout-btn"
          onClick={() => {
            alert("✅ Order Placed Successfully!");
            localStorage.removeItem("cart");
            window.location.reload();
          }}
        >
          Proceed to Checkout
        </button>

        <button className="close-btn" onClick={() => setShowCart(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
