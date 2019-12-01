import { gql } from 'apollo-server'

export const Mutation = gql`
type Mutation {
  createProject(repositoryUrl: String!): Project!
}
`
