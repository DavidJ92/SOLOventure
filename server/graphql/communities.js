const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3001;

// Load environment variables from .env file
dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 60000 }
}));

app.get('/api/posts', (req, res) => {
  // Here you can fetch the posts from your database or any other data source
  const posts = [
    { id: 1, content: 'Hello, world!' },
    { id: 2, content: 'This is a test post.' }
  ];

  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { content } = req.body;

  // Validate the incoming request
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  // Here you can save the new post to your database or any other data source
  const newPost = { id: Date.now(), content };

  res.json(newPost);
});

app.use((err, req, res, next) => {
  // Handle errors
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});