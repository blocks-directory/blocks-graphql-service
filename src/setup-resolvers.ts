import * as GraphQLJSON from 'graphql-type-json'
import { queryResolvers, mutationResolvers } from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    ...queryResolvers,
  },
  Mutation: {
    ...mutationResolvers,
  },
}
