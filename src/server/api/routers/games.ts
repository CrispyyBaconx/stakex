import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export default createTRPCRouter({
    getGames: publicProcedure
	.input(z.string().min(1))
	.query(async ({ ctx, input }) => {
		const games = await ctx.prisma.game.findMany({
			where: {
				sport: {
					name: input,
				}
			},
			orderBy: {
				date: "asc",
			},
			take: 100,
		});

		return games.map((game) => {
			return {
				...game,
			}
		});
	}),
	getGame: publicProcedure
	.input(z.number().min(1))
	.query(async ({ ctx, input }) => {
		const game = await ctx.prisma.game.findUnique({
			where: {
				id: input,
			},
		});

		return game;
	}),
	getGamesInPlay: publicProcedure.query(async ({ ctx }) => {
		const games = await ctx.prisma.game.findMany({
			where: {
				NOT: {
					ended: true,
				},
				date: {
					lte: new Date(),
				},
			},
			orderBy: {
				date: "asc",
			},
			take: 100,
		});

		return games.map((game) => {
			return {
				...game,
			}
		});
	}),
	//addVolumeToGame: 
});