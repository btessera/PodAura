// frontend/src/components/PodcastList.js
import React, { useState, useEffect } from 'react';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch podcasts from backend API
    fetch('http://localhost:5000/api/podcasts')
      .then(response => response.json())
      .then(data => setPodcasts(data))
      .catch(error => console.error('Error fetching podcasts:', error));
  }, []);

  return (
    <div>
      <h2>Podcast Recommendations</h2>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>
            <h3>{podcast.name}</h3>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
