import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const limit = 8;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`,
      )
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, [page]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center error">{error}</h2>;

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search products..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
