// src/graphql/resolvers/identity.resolver.ts
import { IdentityService } from "../../modules/identity/identity.service";

const service = new IdentityService();

export const identityResolver = {
  Mutation: {
    signup: async (_: any, args: any) => {
      const token = await service.signup(args.email, args.password);
      return { token };
    },

    login: async (_: any, args: any) => {
      const token = await service.login(args.email, args.password);
      return { token };
    },
  },
};
