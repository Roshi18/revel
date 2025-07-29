import React, { useRef, useState, useEffect } from 'react';
import './SkinToneAnalyzer.css';
import AnalysisHistory from './AnalysisHistory';
import AnalysisReport from './AnalysisReport';
import ProductSuggestions from './ProductSuggestions';
import ClothingRecommendations from './ClothingRecommendations';
import ShoppingRecommendations from './ShoppingRecommendations';

// Update the component declaration to accept props
const SkinToneAnalyzer = ({ onUndertoneChange }) => {
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  const [history, setHistory] = useState([]);
  const [compareResult, setCompareResult] = useState(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Add handleImageUpload function
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        alert('Image size too large. Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        const image = new Image();
        image.onload = () => analyzeSkinTone(image);
        image.onerror = () => alert('Failed to load image. Please try another one.');
        image.src = e.target.result;
      };
      reader.onerror = () => alert('Failed to read file. Please try again.');
      reader.readAsDataURL(file);
    }
  };

  const determineSkinTone = (r, g, b) => {
    // Calculate color temperature
    const warmth = r - b;
    
    // Determine undertone based on RGB values
    if (warmth > 30) {
      return 'Warm';
    } else if (warmth < -5) {
      return 'Cool';
    } else {
      return 'Neutral';
    }
  };

  const getRecommendations = (undertone) => {
    const recommendations = {
      'Warm': {
        foundation: 'Look for foundations with yellow or golden undertones',
        colors: ['Gold', 'Coral', 'Orange-Red', 'Warm Brown', 'Peach'],
        clothing: ['Earth tones', 'Warm Red', 'Orange', 'Golden Yellow', 'Ivory']
      },
      'Cool': {
        foundation: 'Choose foundations with pink or blue undertones',
        colors: ['Silver', 'Pink', 'Blue-Red', 'Cool Brown', 'Rose'],
        clothing: ['Pure White', 'Navy', 'Blue', 'Purple', 'Cool Green']
      },
      'Neutral': {
        foundation: 'Most foundation undertones will work well',
        colors: ['Universal shades', 'Mauve', 'Soft Pink', 'Taupe', 'Bronze'],
        clothing: ['All colors', 'Black', 'White', 'Navy', 'Gray']
      }
    };

    return recommendations[undertone];
  };

  // Add new state variables after the existing ones
  const [isLoading, setIsLoading] = useState(false);
  
  // Add this useEffect at the top level of the component
  useEffect(() => {
    // Load history from localStorage on component mount
    const savedHistory = localStorage.getItem('skinToneHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);
  
  // Update analyzeSkinTone function
  const analyzeSkinTone = async (image) => {
    setIsLoading(true);
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
  
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      let r = 0, g = 0, b = 0;
      let count = 0;
  
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }
  
      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);
  
      const undertone = determineSkinTone(r, g, b);
      const recommendations = getRecommendations(undertone);
      
      const newResult = {
        r, g, b,
        undertone,
        recommendations,
        date: new Date().toLocaleDateString(),
        imageUrl: preview // Save the image preview
      };
  
      setResult(newResult);
      // Add this line to update the parent component
      onUndertoneChange(undertone);
      
      const updatedHistory = [...history, newResult];
      setHistory(updatedHistory);
      
      // Save to localStorage
      localStorage.setItem('skinToneHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Failed to analyze image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add this function after the analyzeSkinTone function
  const handleCompare = (historicalResult) => {
    if (result) {
      setCompareResult(historicalResult);
    } else {
      alert('Please analyze a new image first before comparing.');
    }
  };
  
  // Add this function after handleCompare
  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all analysis history?')) {
      setHistory([]);
      setCompareResult(null);
      localStorage.removeItem('skinToneHistory');
    }
  };
  
  // Add a reset function to clear current analysis
  const resetAnalysis = () => {
    setResult(null);
    setPreview(null);
    setCompareResult(null);
    onUndertoneChange(null); // Add this line to reset the undertone
  };
  
  return (
    <div className="skin-tone-analyzer">
      <div className="header-section">
        <h2>Skin Undertone Analyzer</h2>
        {history.length > 0 && (
          <button className="clear-button" onClick={clearHistory}>
            Clear History
          </button>
        )}
      </div>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button 
          className="upload-button"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Image
        </button>
        {preview && (
          <img 
            src={preview} 
            alt="Preview" 
            className="preview-image"
          />
        )}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Analyzing your skin tone...</p>
          </div>
        )}
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {result && (
        <>
          <div className="result-container">
            <div className="analysis-result">
              <div
                className="color-preview"
                style={{
                  backgroundColor: `rgb(${result.r}, ${result.g}, ${result.b})`
                }}
              />
              <h3>Your Skin Undertone: {result.undertone}</h3>
              <p className="rgb-values">RGB: ({result.r}, {result.g}, {result.b})</p>
            </div>
            <div className="recommendations">
              <h3>Personalized Recommendations</h3>
              <div className="recommendation-grid">
                <div className="recommendation-card">
                  <h4>Foundation</h4>
                  <p>{result.recommendations.foundation}</p>
                </div>
                <div className="recommendation-card">
                  <h4>Best Makeup Colors</h4>
                  <ul>
                    {result.recommendations.colors.map((color, index) => (
                      <li key={index}>{color}</li>
                    ))}
                  </ul>
                </div>
                <div className="recommendation-card">
                  <h4>Clothing Colors</h4>
                  <ul>
                    {result.recommendations.clothing.map((color, index) => (
                      <li key={index}>{color}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <>
            <AnalysisReport result={result} />
            <ProductSuggestions undertone={result.undertone} />
            <ClothingRecommendations undertone={result.undertone} />
          </>
        </>
      )}
      
      {compareResult && (
        <div className="comparison-section">
          <h3>Comparison</h3>
          <div className="comparison-grid">
            <div className="comparison-card current">
              <h4>Current Analysis</h4>
              <div className="color-preview" style={{
                backgroundColor: `rgb(${result.r}, ${result.g}, ${result.b})`
              }} />
              <p>Undertone: {result.undertone}</p>
            </div>
            <div className="comparison-card historical">
              <h4>Previous Analysis</h4>
              <div className="color-preview" style={{
                backgroundColor: `rgb(${compareResult.r}, ${compareResult.g}, ${compareResult.b})`
              }} />
              <p>Undertone: {compareResult.undertone}</p>
              <p>Date: {compareResult.date}</p>
            </div>
          </div>
        </div>
      )}

      <AnalysisHistory 
        history={history} 
        onCompare={handleCompare}
      />
      
      {result && (
        <button className="reset-button" onClick={resetAnalysis}>
          Analyze New Image
        </button>
      )}
    </div>
  ); // Close return statement
}; // Close component

export default SkinToneAnalyzer;