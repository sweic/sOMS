import { PrismaClient } from "@prisma/client";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import { createServer } from "http";
import "reflect-metadata";
import { WebSocketServer } from "ws";
import { redisClient } from "./utils/redis";
import schemaBuilder from "./utils/schema";
import bodyParser from "body-parser";
import useSecurityMiddlewares from "./middleware/security";
const prisma = new PrismaClient();
dotenv.config();
const allowed = ["http://localhost:3000", "https://studio.apollographql.com"];
const main = async () => {
  const app = express();
  app.use(cookieParser());
  app.use(express.json({ limit: "50mb" }));
  app.use(cors({ origin: allowed, credentials: true }));
  app.use(bodyParser.urlencoded());
  useSecurityMiddlewares(app, { enableNonce: true, enableCSP: true });
  const httpServer = createServer(app);
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });
  const serverCleanup = useServer(
    {
      schema: await schemaBuilder(),
      context: (ctx, msg, args) => ({ prisma: prisma }),
    },
    wsServer
  );
  const server = new ApolloServer({
    schema: await schemaBuilder(),
    context: ({ req, res }) => ({ req, res, prisma }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    },
  });
  httpServer.listen(process.env.SERVER_PORT, async () => {
    console.log(`server listening on port ${process.env.SERVER_PORT}`);
    redisClient.on("Redis server error", (err) => console.log(err));
    redisClient.on("connect", () => console.log("Redis server connected"));
    await redisClient.connect();
  });
};

main().catch((err) => console.log(err));
