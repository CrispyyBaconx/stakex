import { createTRPCRouter } from "@/server/api/trpc";
import { mainRouter, gamesRouter, stakingRouter, userRouter } from "@/server/api/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	main: mainRouter,
	games: gamesRouter,
	staking: stakingRouter,
	user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;