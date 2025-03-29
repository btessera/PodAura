// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import PodcastList from './components/PodcastList';

function App() {
  return (
    <div className="App">
      <h1>MindSync - Podcast Recommendations</h1>
      <PodcastList />
    </div>
  );
}

export default App;
