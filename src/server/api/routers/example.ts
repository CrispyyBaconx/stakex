import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "@/server/api/trpc";
import { clerkClient } from "@clerk/nextjs";
import { type User } from "@clerk/nextjs/dist/server";
import { TRPCError } from "@trpc/server";

const waterDownUser = (user: User) => {
  return {
    id: user.id, 
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  }
};

/**
export const exampleRouter = createTRPCRouter({
  	getAll: publicProcedure.query(async ({ ctx }) => {
    	const example = await ctx.prisma.game.findMany({
    	  	take: 100,
    	});

    	const games = (await clerkClient.users.getUserList({
    	  	userId: example[0].authorId,
    	  	limit: 100,
    	})).map(waterDownUser);

    	console.log(games);

    	return games.map((post) => {
    	  	const author = users.find((user) => user.id === post.authorId);

    	  	if(!author || !author.username) {
    	    	throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Author for post not found" });
    	  	}
		
    	  	return {
    	    	post,
    	    	author: {
    	      		...author,
    	      		username: author.username,
    	    	} // ! this was used for a different program, but I don't have any data at the moment so we can modify this for our needs later
    	  	};
    	});
  	}),
});
 */

export const appRouter = createTRPCRouter({
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

	getCurrentUser: privateProcedure.query(async ({ ctx }) => {
		const user = await clerkClient.users.getUser(ctx.currentUser?.id || "");

		if(!user) {
			throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "User not found" });
		}

		return waterDownUser(user);
	}),

	bet: privateProcedure.mutation({ // ! 1:20:00 https://www.youtube.com/watch?v=YkOSUVzOAA4
		input: z.object({
			gameId: z.string(),
			team: z.string(),
			amount: z.number(),
		}),
		async resolve({ ctx, input }) {
			const game = await ctx.prisma.game.findUnique({
				where: {
					id: input.gameId,
				}
			});

			if(!game) {
				throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Game not found" });
			}

			const user = await clerkClient.users.getUser(ctx.currentUser?.id || "");

			if(!user) {
				throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "User not found" });
			}

			const bet = await ctx.prisma.bet.create({
				data: {
					amount: input.amount,
					gameId: input.gameId,
					team: input.team,
					userId: user.id,
				}
			});

			return {
				...bet,
			};
		}
	}),
});