import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { schemaModules } from "./graphql";
import { MongoConfig } from "./config/mongo.config";
import { config } from "./config/env.config";

async function bootstrap() {
  await MongoConfig.connect();

  const server = new ApolloServer({
    schema: buildSubgraphSchema(schemaModules),
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: config.port, host: "0.0.0.0" },
  });

  console.log(
    `🚀 Service [${config.serviceName}] ready at: ${url}`
  );
}

bootstrap().catch(console.error);
