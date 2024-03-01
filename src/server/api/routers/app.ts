import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type Game } from "@prisma/client";

type GameFilterType = {
    name?: {
        contains: string;
        mode: string;
    };
    teamA?: {
        contains: string;
        mode: string;
    };
    teamB?: {
        contains: string;
        mode: string;
    };
    time?: {
        gte?: Date;
        lt?: Date;
    };
};

export default createTRPCRouter({
	searchGames: publicProcedure
    .input(z.object({
        searchString: z.string().min(3), // at least 3 characters before searching
    }))
    .query(async ({ ctx, input }) => {
        let timeFilter: GameFilterType = {};

        // Attempt to parse the time
        const timeInput = new Date("1970-01-01T" + input.searchString);
        if (!isNaN(timeInput.getTime())) {
            const start = timeInput;
            const end = new Date(start.getTime());
            end.setMinutes(end.getMinutes() + 1);

            timeFilter = {
                time: { // Replace 'time' with your actual field name if it's different.
                    gte: start,
                    lt: end,
                },
            };
        }

        const filters: GameFilterType[] = [
            { name: { contains: input.searchString, mode: 'insensitive' } },
            { teamA: { contains: input.searchString, mode: 'insensitive' } },
            { teamB: { contains: input.searchString, mode: 'insensitive' } }
        ];

        // Only add the timeFilter if it's valid.
        if (timeFilter.time) {
            filters.push(timeFilter);
        }

        const games = await ctx.db.game.findMany({
            where: {
                OR: filters
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
