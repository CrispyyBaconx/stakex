import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export default createTRPCRouter({
    getUsersBets: publicProcedure
    .input(z.object({
        address: z.string().length(42),
        offset: z.number().optional().default(0),
    }))
    .query(async ({ ctx, input }) => {
        const bets = await ctx.db.bet.findMany({
            where: {
                user: {
                    address: input.address,
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 100,
            skip: input.offset,
        });
    
        return bets.map((bet) => {
            return {
                ...bet,
            };
        });
    }),
});