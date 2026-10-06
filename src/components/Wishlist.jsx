import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-container">
        <h1>Your Wishlist</h1>
        <p className="empty-wishlist">Your wishlist is empty</p>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} className="wishlist-item-image" />
            <div className="wishlist-item-info">
              <h3 className="wishlist-item-title">{item.title}</h3>
              <p className="wishlist-item-category">{item.category}</p>
              <p className="wishlist-item-price">Rs. {item.price.toFixed(2)}</p>
            </div>
            <div className="wishlist-item-actions">
              <button
                onClick={() => addToCart(item)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="remove-item-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
