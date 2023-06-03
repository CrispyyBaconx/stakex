import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Game } from "@prisma/client";

export const mainRouter = createTRPCRouter({
	getGames: publicProcedure.query(async ({ ctx }) => {
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
	searchGames: publicProcedure
		.input(z.object({
				searchString: z.string().min(2), // at least 2 characters before searching
	  		})
		)
		.query(async ({ ctx, input }) => { // I could return the games I found with the query, and then use the string current and compare it to make a highlight effect in the frontend
		const games = await ctx.prisma.game.findMany({
			where: {
				OR: [
					{ name: { contains: input.searchString }}, // need to fix schema in db, and also fix this since time won't work without some sort of mutation
					{ team: { contains: input.searchString }}, // also can be team a or team b
					{ time: { contains: input.searchString }}, // after that need to implement args in the frontend to pass in the search string
				],
			},
			take: 100,
		});

		return games.map((game: Game) => {
			return {
				...game,
			}
		});
	}),
});
