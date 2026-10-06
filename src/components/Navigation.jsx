import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Navigation = () => {
  const { cartCount } = useShop();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Product Store
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link">
            Cart ({cartCount})
          </Link>
          <Link to="/wishlist" className="nav-link">
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
