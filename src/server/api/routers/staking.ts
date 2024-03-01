import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export default createTRPCRouter({
    getAPYHistory: publicProcedure
	.input(z.object({
		pool: z.string().length(42), // pool address
		offset: z.number().int().min(0),
		limit: z.number().int().min(1).max(100),
	}))
	.query(async ({ ctx, input }) => {
		const apyHistory = await ctx.db.apyHistory.findMany({
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
	getPools: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.pool.findMany();
	}),
});

// https://stakex.net/assets/carousel/tennis.png
// https://stakex.net/assets/carousel/water.jpg