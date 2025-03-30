// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
const podcastRoutes = require('./routes/podcasts');
app.use('/api/podcasts', podcastRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for "/"
app.get('/', (req, res) => {
  res.send('Welcome to PodAura Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
