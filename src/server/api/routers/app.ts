import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const mainRouter = createTRPCRouter({
	getGames: publicProcedure.query(async ({ ctx }) => {
		// ! maybe instead return a list of games by sport and next games by time & sport
		const games = await ctx.prisma.game.findMany({
			take: 100,
		});

		return games.map((game) => {
			return {
				...game,
			}
		});
	}),

	/*
	bet: privateProcedure.mutation(async ({ ctx }) => {
		//! not sure how to do this yet
		const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		await sleep(1);
		return 0;
	}),
	*/
});