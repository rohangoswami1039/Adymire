
import { identitySchema } from "./schema/identity.schema";
import { identityResolver } from "./resolvers/identity.resolver";

export const schemaModules = [
  {
    typeDefs: identitySchema,
    resolvers: identityResolver,
  },
];
