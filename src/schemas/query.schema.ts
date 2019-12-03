import { gql } from 'apollo-server'

export const Query = gql`
type Query {
    getProjectPreview(repositoryUrl: String!): ProjectPreviewData!
    getProjectById(id: String!): Project
    findProjects(query: String): [ProjectListData!]!
}`
