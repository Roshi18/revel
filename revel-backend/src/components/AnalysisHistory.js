import React from 'react';
import './AnalysisHistory.css';

const AnalysisHistory = ({ history, onCompare }) => {
  return (
    <div className="analysis-history">
      <h3>Analysis History</h3>
      <div className="history-grid">
        {history.map((item, index) => (
          <div key={index} className="history-card">
            <div className="history-image">
              <img src={item.imageUrl} alt={`Analysis ${index + 1}`} />
            </div>
            <div className="history-details">
              <div 
                className="color-sample" 
                style={{ backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})` }}
              />
              <p className="undertone">Undertone: {item.undertone}</p>
              <p className="date">Date: {item.date}</p>
              <button 
                className="compare-button"
                onClick={() => onCompare(item)}
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>
      {history.length === 0 && (
        <p className="no-history">No analysis history available</p>
      )}
    </div>
  );
};

export default AnalysisHistory;