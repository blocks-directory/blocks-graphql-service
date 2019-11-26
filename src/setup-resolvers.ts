import * as GraphQLJSON from 'graphql-type-json'
import { queryResolvers } from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    ...queryResolvers,
  },
  // Mutation: {
  // },
}
