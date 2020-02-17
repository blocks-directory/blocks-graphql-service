import { gql } from 'apollo-server'

export const Query = gql`
type Query {
    getProjectById(id: String!): Project
    findProjects(query: String, offset: Int): [ProjectListData!]!
}`
