import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="price">₹{product.price}</p>

      <p className={product.stock > 0 ? "stock" : "out"}>
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button
        className="add-btn"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        {product.stock > 0 ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}
