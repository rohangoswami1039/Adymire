import { container } from 'tsyringe';
import { UserService } from '../../modules/user/user.service';

// In a real generic setup, we might use a decorator to register resolvers,
// but here we manually map them to the schema for clarity and simplicity.

export const userResolvers = {
    Query: {
        getUsers: async () => {
            const userService = container.resolve(UserService);
            return userService.findAll();
        },
        getUserById: async (_: any, { id }: { id: string }) => {
            const userService = container.resolve(UserService);
            return userService.findById(id);
        },
    },
    Mutation: {
        createUser: async (_: any, { name, email }: { name: string; email: string }) => {
            const userService = container.resolve(UserService);
            return userService.create({ name, email });
        },
    },
};
