import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    localStorage.removeItem("cart");
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="empty-cart">
        <h1>Your cart is empty</h1>
        <button onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="success-page">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopZone.
        </p>

        <button
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <section className="checkout-page">

      <div className="page-title">
        <p>SECURE CHECKOUT</p>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Delivery Information</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Complete Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <div className="form-row">

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              required
            />

          </div>

          <h2>Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
            />
            UPI / Card
          </label>

          <button className="place-order">
            Place Order
          </button>

        </form>

        <div className="checkout-summary">

          <h2>Your Order</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{(
                  item.price * item.quantity
                ).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <strong>Total</strong>
            <strong>
              ₹{cartTotal.toLocaleString()}
            </strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;