import React from 'react';
import './ProductRecommendations.css';

const ProductRecommendations = ({ skinTone }) => {
  const getRecommendations = (tone) => {
    const recommendations = {
      'Very Fair': {
        foundation: ['Ivory', 'Porcelain', 'Fair'],
        colors: ['Soft Pink', 'Peach', 'Light Coral'],
        clothing: ['Navy', 'Deep Purple', 'Emerald']
      },
      'Fair': {
        foundation: ['Beige', 'Natural', 'Nude'],
        colors: ['Rose', 'Mauve', 'Coral'],
        clothing: ['Royal Blue', 'Forest Green', 'Burgundy']
      },
      'Medium': {
        foundation: ['Sand', 'Golden', 'Medium Beige'],
        colors: ['Bronze', 'Copper', 'Terra Cotta'],
        clothing: ['Teal', 'Orange', 'Red']
      },
      'Olive': {
        foundation: ['Golden Tan', 'Medium Olive', 'Warm Beige'],
        colors: ['Gold', 'Warm Brown', 'Bronze'],
        clothing: ['Purple', 'Yellow', 'Cream']
      },
      'Brown': {
        foundation: ['Deep Golden', 'Rich Tan', 'Caramel'],
        colors: ['Deep Bronze', 'Copper', 'Rich Brown'],
        clothing: ['White', 'Gold', 'Bright Colors']
      },
      'Dark Brown': {
        foundation: ['Deep', 'Espresso', 'Rich'],
        colors: ['Deep Gold', 'Bronze', 'Copper'],
        clothing: ['Bright White', 'Yellow', 'Bright Colors']
      }
    };

    return recommendations[tone] || recommendations['Medium'];
  };

  const recommendations = getRecommendations(skinTone);

  return (
    <div className="recommendations-container">
      <h3>Personalized Recommendations</h3>
      <div className="recommendations-grid">
        <div className="recommendation-card">
          <h4>Foundation Shades</h4>
          <ul>
            {recommendations.foundation.map((shade, index) => (
              <li key={index}>{shade}</li>
            ))}
          </ul>
        </div>
        <div className="recommendation-card">
          <h4>Makeup Colors</h4>
          <ul>
            {recommendations.colors.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </div>
        <div className="recommendation-card">
          <h4>Clothing Colors</h4>
          <ul>
            {recommendations.clothing.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;