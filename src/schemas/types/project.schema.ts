import { gql } from 'apollo-server'

export const Project = gql`
type ProjectData {
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
