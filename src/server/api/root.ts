import { mainRouter, gamesRouter, stakingRouter, userRouter } from "~/server/api/routers";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
	main: mainRouter,
	games: gamesRouter, 
	staking: stakingRouter,
	user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
