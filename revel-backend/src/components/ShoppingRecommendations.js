import React from 'react';
import './ShoppingRecommendations.css';

const ShoppingRecommendations = ({ undertone }) => {
  const clothingItems = {
    'Warm': [
      { name: 'Earth Tone Maxi Dress', price: 1999, image: 'dress-warm.jpg' },
      { name: 'Golden Yellow Blouse', price: 1599, image: 'blouse-warm.jpg' },
      { name: 'Rust Orange Sweater', price: 999, image: 'sweater-warm.jpg' },
      { name: 'Copper Metallic Scarf', price: 399, image: 'scarf-warm.jpg' },
      { name: 'Camel Brown Blazer', price: 4999, image: 'blazer-warm.jpg' }
    ],
    'Cool': [
      { name: 'Navy Blue Wrap Dress', price: 1299, image: 'dress-cool.jpg' },
      { name: 'Silver Gray Cardigan', price: 1499, image: 'cardigan-cool.jpg' },
      { name: 'Plum Purple Blouse', price: 899, image: 'blouse-cool.jpg' },
      { name: 'Ice Blue Scarf', price: 399, image: 'scarf-cool.jpg' },
      { name: 'Deep Wine Blazer', price: 2299, image: 'blazer-cool.jpg' }
    ],
    'Neutral': [
      { name: 'Classic Black Dress', price: 2599, image: 'dress-neutral.jpg' },
      { name: 'White Button-Up Shirt', price: 1499, image: 'shirt-neutral.jpg' },
      { name: 'Beige Knit Sweater', price: 999, image: 'sweater-neutral.jpg' },
      { name: 'Gray Silk Scarf', price: 499, image: 'scarf-neutral.jpg' },
      { name: 'Navy Tailored Blazer', price: 5599, image: 'blazer-neutral.jpg' }
    ]
  };

  const handlePurchase = (item) => {
    alert(`Added ${item.name} to cart - ₹${item.price}`);
  };

  return (
    <div className="shopping-recommendations">
      <h3>Shop Your Perfect Colors</h3>
      <div className="shopping-grid">
        {clothingItems[undertone].map((item, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={`/images/${item.image}`} alt={item.name} />
            </div>
            <div className="product-info">
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>
              <button 
                className="buy-button"
                onClick={() => handlePurchase(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingRecommendations;