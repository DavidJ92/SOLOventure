// graphql/schema.js
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    username: String!
    password: String
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    login(username: String!, password: String!): AuthData!
  }

  type Mutation {
    signup(username: String!, password: String!): AuthData!
  }
`);
