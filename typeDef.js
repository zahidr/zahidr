export const typeDefs = `#graphql

  type Student {
    id: ID!
    name: String!
  }

  type Query {
    students: [Student]
  }
`;

export default typeDefs;