import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, checkout } = useShop();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p className="empty-cart">Your cart is empty</p>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">Rs. {item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              Rs. {(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-item-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-amount">Rs. {cartTotal.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
