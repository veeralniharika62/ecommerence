import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <main className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>

        <p>
          Discover amazing products at great prices.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;