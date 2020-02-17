import { gql } from 'apollo-server'

export const Project = gql`
type Project {
  id: String!
  name: String!
  description: String
  platform: String!
  runtime: String
  provider: String
  writtenIn: String
  repositoryUrl: String!
  openIssues: Int
  pullRequests: Int
  lastCommitDate: String!
  readmeUrl: String
}
`

export const SubmitProjectResponse = gql`
type SubmitProjectResponse {
  repositoryUrl: String!
}
`

export const ProjectListData = gql`
type ProjectListData {
  id: String!
  name: String!
  description: String
  platform: String!
  runtime: String
  provider: String
  writtenIn: String
  lastCommitDate: String!
  repositoryUrl: String!
}
`
