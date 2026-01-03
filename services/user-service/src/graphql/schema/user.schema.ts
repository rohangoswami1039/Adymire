import gql from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
  }

  type Query {
    getUsers: [User!]!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;
