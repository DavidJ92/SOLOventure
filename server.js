const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./server/Routes/authRoutes');

const app = express();
app.use(bodyParser.json()); // use the bodyParser middleware

mongoose.connect('mongodb://localhost:27017/myapp', {
  serverSelectionTimeoutMS: 5000, // set a timeout of 5 seconds
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const user = mongoose.model('user', userSchema);

app.use('/api', authRoutes);

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch