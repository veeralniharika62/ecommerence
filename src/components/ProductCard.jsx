function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <small>{product.category}</small>

        <h3>{product.name}</h3>

        <p>? {product.rating}</p>

        <p className="description">
          {product.description}
        </p>

        <div className="price">
          ?{product.price.toLocaleString("en-IN")}
          <del>
            ?{product.oldPrice.toLocaleString("en-IN")}
          </del>
        </div>

        <button>
          ?? Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
