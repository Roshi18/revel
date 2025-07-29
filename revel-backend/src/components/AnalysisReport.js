import React from 'react';
import './AnalysisReport.css';

const AnalysisReport = ({ result }) => {
  const getSkinToneDescription = (undertone) => {
    const descriptions = {
      'Warm': 'Your skin has golden, peachy, or yellow undertones. You likely look best in gold jewelry, and your skin might tan easily.',
      'Cool': 'Your skin has pink, red, or blue undertones. Silver jewelry typically complements your skin tone, and you might burn easily in the sun.',
      'Neutral': 'Your skin has a mix of warm and cool undertones. You can wear both gold and silver jewelry, and your skin might tan or burn.'
    };
    return descriptions[undertone];
  };

  const getSeasonalPalette = (undertone) => {
    const seasons = {
      'Warm': ['Spring', 'Autumn'],
      'Cool': ['Summer', 'Winter'],
      'Neutral': ['All seasons']
    };
    return seasons[undertone];
  };

  return (
    <div className="analysis-report">
      <h3>Detailed Analysis Report</h3>
      
      <div className="report-section">
        <h4>Your Skin Profile</h4>
        <p>{getSkinToneDescription(result.undertone)}</p>
        
        <div className="color-values">
          <div className="color-box" style={{ backgroundColor: `rgb(${result.r}, ${result.g}, ${result.b})` }}></div>
          <div className="color-details">
            <p>Red Value: {result.r}</p>
            <p>Green Value: {result.g}</p>
            <p>Blue Value: {result.b}</p>
          </div>
        </div>
      </div>

      <div className="report-section">
        <h4>Seasonal Color Palette</h4>
        <p>Best seasons for your skin tone:</p>
        <ul>
          {getSeasonalPalette(result.undertone).map((season, index) => (
            <li key={index}>{season}</li>
          ))}
        </ul>
      </div>

      <div className="report-section">
        <h4>Tips & Recommendations</h4>
        <ul>
          <li>Foundation: {result.recommendations.foundation}</li>
          <li>Best time for photos: {result.undertone === 'Warm' ? 'Golden hour (sunset)' : 'Soft light (cloudy day)'}</li>
          <li>Natural light complements: {result.undertone === 'Cool' ? 'North-facing light' : 'South-facing light'}</li>
        </ul>
      </div>
    </div>
  );
};

export default AnalysisReport;