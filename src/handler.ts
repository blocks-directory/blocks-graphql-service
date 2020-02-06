import { ApolloServer, IResolvers } from 'apollo-server-lambda'
import * as Logger from 'bunyan'

import resolvers from './setup-resolvers'
import schema from './schema'

const log = Logger.createLogger({
  level: process.env.loglevel || 'DEBUG',
  name: 'blocks-directory-graphql',
} as Logger.LoggerOptions)

const server = new ApolloServer({
  resolvers: resolvers as IResolvers,
  typeDefs: schema as any,
  introspection: true,
  playground: true,
  context: ({ event, context }: any) => {
    // add logger for child
    const config: any = {
      log: log.child({ schema: 'schema' }),
    }

    return { ...config, event, context }
  },
})

export const handler = server.createHandler({ cors: { origin: '*', credentials: true } })
