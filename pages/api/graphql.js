import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../assets/graphql/schema'

const apolloServer = new ApolloServer({
  schema,
  context(ctx) {
    return ctx
  },
  introspection: true,
  playground: true,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })