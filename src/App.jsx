import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <p>WELCOME TO SHOPZONE</p>

          <h1>
            Everything You Need,
            <br />
            All In One Place.
          </h1>

          <p>
            Discover amazing products,
            great deals and a shopping
            experience you'll love.
          </p>

          <a
            href="/products"
            className="hero-button"
          >
            Shop Now →
          </a>

        </div>

        <div className="hero-emoji">
          🛍️
        </div>

      </section>

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-grid">

          <div className="category-card">
            📱
            <h3>Electronics</h3>
          </div>

          <div className="category-card">
            👕
            <h3>Fashion</h3>
          </div>

          <div className="category-card">
            👟
            <h3>Shoes</h3>
          </div>

          <div className="category-card">
            🎒
            <h3>Accessories</h3>
          </div>

        </div>

      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;