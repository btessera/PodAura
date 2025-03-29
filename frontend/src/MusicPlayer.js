// frontend/src/components/PodcastList.js
import React, { useState, useEffect } from 'react';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('/api/podcasts')
      .then(response => response.json())
      .then(data => setPodcasts(data));
  }, []);

  return (
    <div>
      <h2>Podcast Recommendations</h2>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>{podcast.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PodcastList;
