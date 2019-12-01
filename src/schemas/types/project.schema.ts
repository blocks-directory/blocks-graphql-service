import { gql } from 'apollo-server'

export const Project = gql`
type Project {
  id: String
  name: String
  description: String
  platform: String
  runtime: String
  provider: String
  repositoryUrl: String!
  openIssues: Int
  pullRequests: Int
  lastCommitDate: String
  readmeUrl: String
}
`

export const ProjectPreviewData = gql`
type ProjectPreviewData {
  name: String
  description: String
  platform: String
  runtime: String
  provider: String
  repositoryUrl: String!
  openIssues: Int
  pullRequests: Int
  lastCommitDate: String
  readmeUrl: String
}
`

export const ProjectListData = gql`
type ProjectListData {
  id: String
  name: String
  description: String
  platform: String
  runtime: String
  provider: String
  lastCommitDate: String
}
`
