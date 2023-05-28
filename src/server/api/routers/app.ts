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

	getCurrentUser: privateProcedure.query(async ({ ctx }) => {
		const user = await clerkClient.users.getUser(ctx.currentUser?.id || "");

		if(!user) {
			throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "User not found" });
		}

		return waterDownUser(user);
	}),

	bet: privateProcedure.mutation(async ({ ctx }) => {
		//! not sure how to do this yet
		const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		await sleep(1);
		return 0;
	}),
});