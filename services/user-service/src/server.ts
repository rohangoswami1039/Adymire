import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph'; // NEW: For Federation
import { typeDefs, resolvers } from './graphql';
import { MongoConfig } from './config/mongo.config';
import { config } from './config/env.config';

async function bootstrap() {
    await MongoConfig.connect();

    // Create Subgraph Schema
    // Map the arrays to an array of schema modules
    const modules = typeDefs.map((typeDef, i) => ({
        typeDefs: typeDef,
        resolvers: resolvers[i],
    }));

    const server = new ApolloServer({
        schema: buildSubgraphSchema(modules),
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: config.port, host: '0.0.0.0' },
    });

    console.log(`\x1b[32m🚀 Service [${config.serviceName}] ready at: ${url}\x1b[0m`);
}

bootstrap().catch((err) => {
    console.error('Error starting server:', err);
});
