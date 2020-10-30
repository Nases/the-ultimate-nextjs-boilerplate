import queries from './queries/queries'
import mutations from './mutations/mutations'
import Date from './scalars/Date'


export const resolvers = {
  Date,
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
}