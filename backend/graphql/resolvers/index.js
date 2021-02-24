
import { userQueries, userMutations } from './user';
import { entryQueries, entryMutations } from './entry';
import { propertyQueries, propertyMutations } from './property';

const resolvers = {
  Query: {
    ...userQueries,
    ...entryQueries,
    ...propertyQueries,
  },
  Mutation: {
    ...userMutations,
    ...entryMutations,
    ...propertyMutations,
  },
};

export default resolvers;