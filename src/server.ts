import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { pollRoutes } from "./routes/poll";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "hash-nlw-copa",
  });

  fastify.register(authRoutes);
  fastify.register(pollRoutes);
  fastify.register(userRoutes);
  fastify.register(guessRoutes);
  fastify.register(gameRoutes);

  await fastify.listen({
    port: 3333,
    host: "0.0.0.0",
  });
}

bootstrap();
