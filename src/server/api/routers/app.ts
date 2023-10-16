import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Game } from "@prisma/client";

export const mainRouter = createTRPCRouter({
	getGames: publicProcedure
	.input(z.string().min(1))
	.query(async ({ ctx, input }) => {
		const games = await ctx.prisma.game.findMany({
			take: 100, // !
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
				inPlay: true, // ! maybe look at start time and "ended" flag and compare to current time
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
    }))
    .query(async ({ ctx, input }) => { 
      	let timeFilter = {};

      	// Check if the input string can be converted to a time
      	const timeInput = new Date("1970-01-01T" + input.searchString);
      		if (!isNaN(timeInput.getTime())) {
        	// Create time range for the search
        	const start = timeInput;
        	const end = new Date(start.getTime());
        	end.setMinutes(end.getMinutes() + 1);

        	timeFilter = {
        	  	time: {
        	    	gte: start,
        	    	lt: end,
        	  	},
        	};
    	}

      	const games = await ctx.prisma.game.findMany({
        	where: {
          		OR: [
            		{ name: { contains: input.searchString }},
            		{ teamA: { contains: input.searchString }},
            		{ teamB: { contains: input.searchString }},
            		timeFilter,
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
	getAPYHistory: publicProcedure
	.input(z.object({
		pool: z.string().length(42), // pool address
		offset: z.number().int().min(0),
		limit: z.number().int().min(1).max(100),
	}))
	.query(async ({ ctx, input }) => {
		const apyHistory = await ctx.prisma.apyHistory.findMany({
			orderBy: {
				date: "desc",
			},
			skip: input.offset,
			take: input.limit,
		});

		return apyHistory.map((history) => {
			return {
				...history,
			}
		});
	}),
});
