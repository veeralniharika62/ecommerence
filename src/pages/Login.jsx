import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <main className="auth-page">

      <form
        className="auth-box"
        onSubmit={handleSubmit}
      >

        <h1>Welcome Back 👋</h1>

        <p>
          Login to your ShopZone account
        </p>

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </form>

    </main>
  );
}

export default Login;