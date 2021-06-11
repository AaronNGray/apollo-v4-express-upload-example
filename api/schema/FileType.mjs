import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import UPLOAD_DIRECTORY_URL from '../config/UPLOAD_DIRECTORY_URL.mjs';

export default new GraphQLObjectType({
  name: 'File',
  description: 'A stored file.',
  fields: () => ({
    id: {
      description: 'Unique ID.',
      type: GraphQLNonNull(GraphQLString),
      resolve: (storedFileName) => storedFileName,
    },
    name: {
      description: 'File name.',
      type: GraphQLNonNull(GraphQLString),
      resolve: (storedFileName) => storedFileName,
    },
    url: {
      description: 'File URL.',
      type: GraphQLNonNull(GraphQLString),
      resolve: (storedFileName) =>
        new URL(storedFileName, UPLOAD_DIRECTORY_URL),
    },
  }),
});
