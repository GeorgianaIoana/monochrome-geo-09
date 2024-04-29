import { useState } from 'react';
const ADD_TO_CART_EVENT = 'cart/productAdded';

export const AddToCartButton = ({ productId }) => {
  const [quantity, setQuantity] = useState(0);
  const increaseQuantity = () => {
    if (quantity) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <button
      className="product-control"
      type="button"
      title="Add to Cart"
      onClick={increaseQuantity}
    >
      <i className="fa-solid fa-cart-plus"></i>
    </button>
  );
};
