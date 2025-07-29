import React from 'react';
import './ClothingRecommendations.css';

const ClothingRecommendations = ({ undertone }) => {
  const clothingStyles = {
    'Warm': {
      casual: ['Earthy brown tops', 'Cream sweaters', 'Olive green pants', 'Rust colored dresses'],
      formal: ['Gold evening gowns', 'Copper blazers', 'Warm ivory suits', 'Bronze accessories'],
      accessories: ['Gold jewelry', 'Tortoise shell sunglasses', 'Cognac leather bags', 'Camel scarves']
    },
    'Cool': {
      casual: ['Navy blue tops', 'Gray sweaters', 'Dark denim', 'Plum dresses'],
      formal: ['Silver evening wear', 'Charcoal suits', 'Deep purple gowns', 'Platinum accessories'],
      accessories: ['Silver jewelry', 'Black leather bags', 'Blue-toned scarves', 'White pearl necklaces']
    },
    'Neutral': {
      casual: ['White t-shirts', 'Black sweaters', 'Classic denim', 'Beige dresses'],
      formal: ['Black suits', 'Navy blazers', 'Gray formal wear', 'Classic white shirts'],
      accessories: ['Mixed metal jewelry', 'Black or brown bags', 'Neutral scarves', 'Classic watches']
    }
  };

  const styles = clothingStyles[undertone];

  return (
    <div className="clothing-recommendations">
      <h3>Detailed Clothing Guide</h3>
      <div className="clothing-categories">
        <div className="category">
          <h4>Casual Wear</h4>
          <ul>
            {styles.casual.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Formal Wear</h4>
          <ul>
            {styles.formal.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Accessories</h4>
          <ul>
            {styles.accessories.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClothingRecommendations;