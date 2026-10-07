import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        Shop<span>Zone</span>
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;