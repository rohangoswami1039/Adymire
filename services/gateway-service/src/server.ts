import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import dotenv from 'dotenv';
import path from 'path';

// Load env
if (!process.env.SERVICE_PORT) {
    dotenv.config({ path: path.resolve(__dirname, '../../../../env/shared.env') });
}

// NOTE: In production you should use Managed Federation (Apollo Studio)
// For local boilerplate, we use IntrospectAndCompose.
const MAX_RETRIES = 30;
const RETRY_DELAY_MS = 2000; // 2 seconds

async function start() {
    let retries = MAX_RETRIES;

    while (retries > 0) {
        try {
            // Re-instantiate gateway/server on each retry to avoid cached failed state
            const gateway = new ApolloGateway({
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        { name: 'users', url: process.env.USER_SERVICE_URL || 'http://localhost:4001/graphql' },
                    ],
                }),
            });

            const server = new ApolloServer({
                gateway,
            });

            const { url } = await startStandaloneServer(server, {
                listen: { port: 4000 },
            });

            console.log(`\x1b[32m🚀 Gateway ready at ${url}\x1b[0m`);
            return; // Success
        } catch (err: any) {
            console.error(`\x1b[31mGateway connection failed: ${err.message}\x1b[0m`);
            console.log(`\x1b[33mRetrying in ${RETRY_DELAY_MS / 1000}s... (${retries} attempts left)\x1b[0m`);
            retries--;
            await new Promise(res => setTimeout(res, RETRY_DELAY_MS));
        }
    }

    console.error("\x1b[31mCreate Gateway failed after multiple retries. Is the User Service running?\x1b[0m");
    process.exit(1);
}

start().catch((err) => {
    console.error("Fatal error starting gateway:", err);
});
