import React from 'react';
import './ProductSuggestions.css';

const ProductSuggestions = ({ undertone }) => {
  const products = {
    'Warm': {
      foundation: [
        { name: 'Golden Glow Foundation', brand: 'Luminous', price: 599, shade: 'Warm Beige', image: 'foundation-warm-1.jpg' },
        { name: 'Sun-Kissed Base', brand: 'NaturalGlow', price: 799, shade: 'Golden Medium', image: 'foundation-warm-2.jpg' }
      ],
      blush: [
        { name: 'Coral Sunset Blush', brand: 'ColorPop', price: 999, shade: 'Warm Peach', image: 'blush-warm-1.jpg' },
        { name: 'Terra-cotta Glow', brand: 'Blushia', price: 499, shade: 'Warm Bronze', image: 'blush-warm-2.jpg' }
      ],
      lipstick: [
        { name: 'Autumn Spice Lipstick', brand: 'LipLuxe', price: 899, shade: 'Warm Red', image: 'lipstick-warm-1.jpg' },
        { name: 'Golden Coral', brand: 'GlamGlow', price: 599, shade: 'Peachy Nude', image: 'lipstick-warm-2.jpg' }
      ]
    },
    'Cool': {
      foundation: [
        { name: 'Rose Petal Foundation', brand: 'Luminous', price: 999, shade: 'Cool Ivory', image: 'foundation-cool-1.jpg' },
        { name: 'Pink Base Perfect', brand: 'NaturalGlow', price: 599, shade: 'Cool Beige', image: 'foundation-cool-2.jpg' }
      ],
      blush: [
        { name: 'Berry Flush Blush', brand: 'ColorPop', price: 499, shade: 'Cool Pink', image: 'blush-cool-1.jpg' },
        { name: 'Rosy Glow', brand: 'Blushia', price: 699, shade: 'Mauve', image: 'blush-cool-2.jpg' }
      ],
      lipstick: [
        { name: 'Winter Berry Lipstick', brand: 'LipLuxe', price: 499, shade: 'Cool Red', image: 'lipstick-cool-1.jpg' },
        { name: 'Pink Frost', brand: 'GlamGlow', price: 299, shade: 'Rose', image: 'lipstick-cool-2.jpg' }
      ]
    },
    'Neutral': {
      foundation: [
        { name: 'Balance Perfect Foundation', brand: 'Luminous', price: 799, shade: 'True Beige', image: 'foundation-neutral-1.jpg' },
        { name: 'Universal Base', brand: 'NaturalGlow', price: 999, shade: 'Neutral Medium', image: 'foundation-neutral-2.jpg' }
      ],
      blush: [
        { name: 'Universal Flush Blush', brand: 'ColorPop', price: 499, shade: 'Neutral Pink', image: 'blush-neutral-1.jpg' },
        { name: 'Balanced Glow', brand: 'Blushia', price: 399, shade: 'Soft Rose', image: 'blush-neutral-2.jpg' }
      ],
      lipstick: [
        { name: 'Classic Nude Lipstick', brand: 'LipLuxe', price: 699, shade: 'Universal Nude', image: 'lipstick-neutral-1.jpg' },
        { name: 'Balanced Rose', brand: 'GlamGlow', price: 399, shade: 'Neutral Pink', image: 'lipstick-neutral-2.jpg' }
      ]
    }
  };

  const handleBuyNow = (product) => {
    alert(`Added to cart: ${product.name} - ₹${product.price}`);
  };

  // In the return statement, update the product item rendering
  return (
    <div className="product-suggestions">
      <h3>Recommended Beauty Products</h3>
      <div className="product-categories">
        {Object.entries(products[undertone]).map(([category, items]) => (
          <div key={category} className="product-category">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div className="product-list">
              {items.map((product, index) => (
                <div key={index} className="product-item">
                  <div className="product-image">
                    <img src={`/images/products/${product.image}`} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h5>{product.name}</h5>
                    <p className="brand">{product.brand}</p>
                    <p className="shade">Shade: {product.shade}</p>
                    <p className="price">₹{product.price}</p>
                  </div>
                  <button 
                    className="buy-button"
                    onClick={() => handleBuyNow(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;