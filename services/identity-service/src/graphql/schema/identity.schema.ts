import { gql } from "graphql-tag";

export const identitySchema = gql`
  type AuthPayload {
    token: String!
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;
