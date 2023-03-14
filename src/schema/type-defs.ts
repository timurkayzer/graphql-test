import { gql } from "apollo-server";
import { users } from "./users";

export const typeDefs = gql`

    type User {
        id:ID!
        name:String!
        login: String!
        age: Int
        nationality: Nationality
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Query {
        users: [User]!
        user(id:ID!): User
        movies: [Movie]
        movie(name:String!):Movie
    }

    type Movie {
        id:ID!
        name:String!
        year:Int!
        inTheaters:Boolean!
    }

    enum Nationality {
        ru
        uz
        en
    }

    input CreateUserInput {
        name:String!
        login: String!
        age: Int
        nationality: Nationality = uz
    }

    input UpdateUserName {
        id: ID!
        name: String!
    }

    type Mutation {
        createUser(user:CreateUserInput!):User!
        updateUserName(updateUserName:UpdateUserName):User!
    }

`;

