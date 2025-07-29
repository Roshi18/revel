import React from 'react'
import { Helmet } from 'react-helmet'
import SkinToneAnalyzer from '../components/SkinToneAnalyzer'
import './skin-analyzer.css'

const SkinAnalyzerView = (props) => {
  return (
    <div className="skin-analyzer-container">
      <Helmet>
        <title>Skin Tone Analyzer - Spotless Hungry Crocodile</title>
      </Helmet>
      <div className="skin-analyzer-content">
        <h1 className="skin-analyzer-title">Skin Tone Analyzer</h1>
        <SkinToneAnalyzer />
      </div>
    </div>
  )
}

export default SkinAnalyzerView