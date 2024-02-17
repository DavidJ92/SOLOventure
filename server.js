const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Construct a schema using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};

const app = express();

// Configure bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create User model
const User = mongoose.model('User', userSchema);

// Route for user signup
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error("Error signing up:", err);
    res.status(500).send("Error signing up");
  }
});

// Route for user login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).send("Error logging in");
  }
});

// Mount GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL for testing
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
