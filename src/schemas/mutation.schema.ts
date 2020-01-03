import { gql } from 'apollo-server'

export const Mutation = gql`
type Mutation {
  submitProject(repositoryUrl: String!): SubmitProjectResponse!
}
`
