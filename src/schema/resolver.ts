import { movies } from "./movies";
import { User } from "./user.entity";
import { users } from "./users";

export const resolver = {
    Query: {
        users: () => {
            return users;
        },

        user: (_: any, args: { id: number; }) => {
            return users.find(u => u.id === args.id);
        },

        movies: () => {
            return movies;
        },

        movie: (parent: any, args: { name: string; }) => {
            return movies.find(m => m.name === args.name);
        }
    },

    User: {
        favoriteMovies: () => movies
    },

    Mutation: {
        createUser: (parent: any, args: { user: User; }) => {
            const { user } = args;
            user.id = users.length;

            users.push(user);

            return user;
        },

        updateUserName: (parent: any, args: { updateUserName: Pick<User, 'id' | 'name'>; }) => {
            const user = users.find(u => u.id == args.updateUserName.id);
            if (!user) throw new Error("User not found");

            user.name = args.updateUserName.name;
            return user;
        }
    }
};