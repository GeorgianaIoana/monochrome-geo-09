export function ProductTile({ products }) {
  const { productName, productPrice, productImageSource, productImageAlt } =
    products;


  return (
    <>
      <div className="product-tile-image">
        <a href="" title="">
          <img src={productImageSource} alt={productImageAlt} />
        </a>
        <a href="" title="Add to wishlist">
          <i className="fa-regular fa-heart"></i>
        </a>
      </div>

      <h1>
        <a href="" title={productName}>
          {productName}
        </a>
      </h1>

      <div className="d-flex gap-2 justify-content-center align-items-center">
        <span>${productPrice}</span>
        <button type="button" title="Add to cart">
          <i class="fa-solid fa-cart-arrow-down"></i>
        </button>
      </div>
    </>
  );
}
