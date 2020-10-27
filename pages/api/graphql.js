import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../assets/graphql/server/schema'
import { isAuthenticated } from '../../assets/graphql/server/utils/auth'
import dbConnect from '../../assets/graphql/server/utils/dbConnect'

const apolloServer = new ApolloServer({
  schema,
  context(ctx) {
    dbConnect()
    ctx.req.isAuthenticated = isAuthenticated
    return ctx
  },
  // remove below when the app is ready
  // make playground and introspection available in production
  introspection: true,
  playground: true
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })