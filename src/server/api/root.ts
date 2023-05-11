import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { topicRouter } from "~/server/api/routers/topic";
import { documentRouter } from "~/server/api/routers/documents";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  topic: topicRouter,
  documents: documentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
