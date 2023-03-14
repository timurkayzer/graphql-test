import { ApolloServer } from "apollo-server";
import { resolver } from "./schema/resolver";
import { typeDefs } from "./schema/type-defs";

const server = new ApolloServer({
    typeDefs,
    resolvers: resolver
});

server.listen().then((val) => {
    console.log(val);
});