import queries from './queries/queries'
import mutations from './mutations/mutations'


export const resolvers = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
}