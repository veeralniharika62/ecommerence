import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>
        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="details-page">

      <div className="details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="details-content">

        <p className="category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <div className="details-rating">
          ⭐ {product.rating} / 5
        </div>

        <div className="details-price">
          ₹{product.price.toLocaleString()}
          <span>
            ₹{product.oldPrice.toLocaleString()}
          </span>
        </div>

        <p className="description">
          {product.description}
        </p>

        <div className="product-benefits">
          <p>✓ Premium Quality</p>
          <p>✓ Fast Delivery</p>
          <p>✓ Easy Returns</p>
        </div>

        <button
          className="large-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

        <Link
          to="/cart"
          className="buy-btn"
        >
          Buy Now
        </Link>

      </div>

    </section>
  );
}

export default ProductDetails;