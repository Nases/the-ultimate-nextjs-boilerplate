import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type-defs/type-defs'
import { resolvers } from './resolvers/resolvers'


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})