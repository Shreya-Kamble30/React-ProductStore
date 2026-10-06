# React Product Store

A fully functional e-commerce product store application built with React. Features product browsing, shopping cart, wishlist management, and checkout functionality.

## Features

- 🛍️ **Product Listing** - Browse products with grid layout
- 🔍 **Search** - Real-time product search
- 🏷️ **Category Filter** - Filter products by category
- 📦 **Product Details** - Detailed product view with quantity selector
- 🛒 **Shopping Cart** - Add/remove items, quantity updates, total calculation
- ❤️ **Wishlist** - Save favorite products for later
- 🔐 **Persistence** - Cart and wishlist saved to localStorage
- 💳 **Checkout** - Complete checkout process with order confirmation
- 📱 **Responsive Design** - Works on all screen sizes
- ⚡ **Loading States** - Smooth loading and error handling
- 🔔 **Notifications** - Toast notifications for user actions

## Tech Stack

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Context API** - Global state management
- **CSS** - Custom styling (no frameworks)
- **Fake Store API** - External API for product data

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Navigation.jsx
│   └── Toast.jsx
├── context/            # Global state management
│   └── ShopContext.jsx
├── services/           # API integration
│   └── api.js
├── pages/              # Route components
│   ├── Home.jsx
│   ├── CartPage.jsx
│   └── WishlistPage.jsx
├── styles/             # CSS styling
│   └── App.css
├── App.jsx             # Main app with routing
└── main.jsx            # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features in Detail

### Product Management
- 20 products across 9 categories
- Categories: Women (tops, jeans, dresses), Men (shirts, jeans, t-shirts), Jewelry, Shoes, Watches
- Real-time search functionality
- Category-based filtering

### Shopping Cart
- Add products with custom quantity
- Update item quantities
- Remove items from cart
- Real-time total calculation
- Persistent storage with localStorage
- Checkout with order confirmation

### Wishlist
- Add/remove products from wishlist
- Quick add to cart from wishlist
- Visual indicators for wishlisted items
- Persistent storage

### User Experience
- Loading states during API calls
- Error handling with mock data fallback
- Toast notifications for user feedback
- Smooth animations and transitions
- Mobile-responsive design

## API Integration

The app uses the Fake Store API for product data with a fallback to mock data:
- `fetchProducts()` - Get all products
- `fetchProductById(id)` - Get single product
- `fetchCategories()` - Get all categories
- `fetchProductsByCategory(category)` - Filter by category

## State Management

Uses React Context API for global state:
- **Cart State**: Items array, total calculation, item count
- **Wishlist State**: Items array
- **Toast State**: Notification messages
- All state persisted to localStorage

## Routing

- `/` - Home page with product listing
- `/product/:id` - Product details page
- `/cart` - Shopping cart
- `/wishlist` - Wishlist page

## Categories

- Women tops
- Women jeans
- Women dresses
- Men Shirts
- Men jeans
- Men t-shirt
- Jewelery
- Shoes
- Watches

## Future Enhancements

- User authentication
- Payment gateway integration
- Product reviews and ratings
- Order history
- Admin panel for product management
- Advanced filtering (price range, brand, etc.)
- Dark mode toggle

## License

This project is open source and available for educational purposes.
