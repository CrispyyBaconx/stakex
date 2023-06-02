import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

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
	getGamesInPlay: publicProcedure.query(async ({ ctx }) => {
		const games = await ctx.prisma.game.findMany({
			where: {
				inPlay: true,
			},
			take: 100,
		});

		return games.map((game) => {
			return {
				...game,
			}
		});
	}),
});