// Mock data as fallback since Fake Store API is blocked
const mockProducts = [
  {
    id: 1,
    title: "Women's Casual Top",
    price: 599,
    description: "Comfortable cotton top perfect for everyday wear. Soft fabric with a relaxed fit.",
    category: "women tops",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Women's Floral Dress",
    price: 1299,
    description: "Beautiful floral print dress with a flattering A-line silhouette. Perfect for summer outings.",
    category: "women dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Women's Slim Fit Jeans",
    price: 1499,
    description: "Classic slim fit jeans in premium denim. Comfortable stretch fabric for all-day wear.",
    category: "women jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Women's Summer Top",
    price: 799,
    description: "Lightweight and breathable summer top. Perfect for hot weather.",
    category: "women tops",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Women's Party Dress",
    price: 2499,
    description: "Elegant party dress with intricate detailing. Perfect for special occasions.",
    category: "women dresses",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Women's High Waist Jeans",
    price: 1699,
    description: "Stylish high waist jeans with a modern fit. Great for casual outings.",
    category: "women jeans",
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Men's Formal Shirt",
    price: 1199,
    description: "Premium cotton formal shirt perfect for office wear. Crisp and professional look.",
    category: "men Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Men's Casual T-Shirt",
    price: 499,
    description: "Comfortable cotton t-shirt for everyday casual wear. Available in multiple colors.",
    category: "men t-shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    title: "Men's Slim Fit Jeans",
    price: 1599,
    description: "Modern slim fit jeans with stretch comfort. Perfect for casual and smart-casual looks.",
    category: "men jeans",
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    title: "Men's Checkered Shirt",
    price: 999,
    description: "Classic checkered pattern shirt. Versatile style for various occasions.",
    category: "men Shirts",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop"
  },
  {
    id: 11,
    title: "Men's Polo T-Shirt",
    price: 699,
    description: "Classic polo t-shirt with a comfortable fit. Great for casual outings.",
    category: "men t-shirt",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop"
  },
  {
    id: 12,
    title: "Men's Regular Fit Jeans",
    price: 1399,
    description: "Comfortable regular fit jeans. Classic style that never goes out of fashion.",
    category: "men jeans",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop"
  },
  {
    id: 13,
    title: "Gold Necklace",
    price: 4999,
    description: "Elegant gold necklace with a delicate design. Perfect for everyday wear.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop"
  },
  {
    id: 14,
    title: "Silver Earrings",
    price: 1299,
    description: "Beautiful silver earrings with a modern design. Great for any occasion.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
  },
  {
    id: 15,
    title: "Diamond Ring",
    price: 8999,
    description: "Stunning diamond ring with a classic design. Perfect for special moments.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop"
  },
  {
    id: 16,
    title: "Gold Bracelet",
    price: 3499,
    description: "Elegant gold bracelet with a timeless design. Perfect for gifting.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
  },
  {
    id: 17,
    title: "Running Shoes",
    price: 2999,
    description: "Comfortable running shoes with excellent cushioning. Perfect for daily workouts.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    id: 18,
    title: "Casual Sneakers",
    price: 1999,
    description: "Stylish casual sneakers for everyday wear. Comfortable and trendy.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
  },
  {
    id: 19,
    title: "Analog Watch",
    price: 2499,
    description: "Classic analog watch with a leather strap. Elegant and timeless design.",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop"
  },
  {
    id: 20,
    title: "Digital Smart Watch",
    price: 3999,
    description: "Modern digital smart watch with fitness tracking features. Stylish and functional.",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  }
];

const mockCategories = ["women tops", "women jeans", "women dresses", "men Shirts", "men jeans", "men t-shirt", "jewelery", "Shoes", "Watches"];

export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch (error) {
    console.log('Using mock data as fallback');
    return mockProducts;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch (error) {
    console.log('Using mock data as fallback');
    const product = mockProducts.find(p => p.id === parseInt(id));
    if (!product) throw new Error('Product not found');
    return product;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch (error) {
    console.log('Using mock data as fallback');
    return mockCategories;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) throw new Error('API unavailable');
    return await response.json();
  } catch (error) {
    console.log('Using mock data as fallback');
    return mockProducts.filter(p => p.category === category);
  }
};
