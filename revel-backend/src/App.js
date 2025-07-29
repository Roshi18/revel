import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkinToneAnalyzer from './components/SkinToneAnalyzer';
import ShoppingRecommendations from './components/ShoppingRecommendations';
import './App.css';

function App() {
  const [undertone, setUndertone] = useState(null); // Start with no undertone

  const handleUndertoneChange = (newUndertone) => {
    setUndertone(newUndertone);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <SkinToneAnalyzer onUndertoneChange={handleUndertoneChange} />
              {undertone && <ShoppingRecommendations undertone={undertone} />}
            </>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;