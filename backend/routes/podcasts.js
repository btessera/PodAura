const express = require('express');
const app = express();
const podcastsRoutes = require('./routes/podcasts');

app.use(express.json()); // Enable JSON parsing if needed
app.use('/podcasts', podcastsRoutes); // Use the podcasts routes

app.get('/', (req, res) => {
  res.send('Welcome to PodAura Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
