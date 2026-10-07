import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            NEW COLLECTION 2026
          </p>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style</span>
          </h1>

          <p>
            Shop the latest trends in fashion,
            electronics and accessories.
          </p>

          <Link to="/products" className="hero-btn">
            Shop Now →
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Shopping"
          />
        </div>

      </section>

      <section className="features">

        <div>
          <span>🚚</span>
          <div>
            <h3>Free Shipping</h3>
            <p>On orders over ₹999</p>
          </div>
        </div>

        <div>
          <span>🔒</span>
          <div><h3>Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>
        </div>

        <div>
          <span>↩️</span>
          <div>
            <h3>Easy Returns</h3>
            <p>30 day return policy</p>
          </div>
        </div>

        <div>
          <span>🎧</span>
          <div>
            <h3>24/7 Support</h3>
            <p>We're here to help</p>
          </div>
        </div>

      </section>

      <section className="section">

        <div className="section-heading">
          <div>
            <p>SHOP NOW</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/products">
            View All →
          </Link>
        </div>

        <div className="product-grid">

          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      <section className="banner">

        <div>
          <p>LIMITED TIME OFFER</p>

          <h2>
            Get up to
            <span> 50% OFF</span>
          </h2>

          <p>
            Don't miss our biggest sale of the season.
          </p>

          <Link to="/products">
            Explore Deals →
          </Link>
        </div>

      </section>

    </>
  );
}

export default Home;
          