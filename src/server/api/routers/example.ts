import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { clerkClient } from "@clerk/nextjs";
import { type User } from "@clerk/nextjs/dist/server";
import { TRPCError } from "@trpc/server";

const filterUserForClient = (user: User) => {
  return {
    id: user.id, 
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  }
};

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const example = await ctx.prisma.game.findMany({
      take: 100,
    });

    const games = (await clerkClient.users.getUserList({
      userId: example[0].authorId,
      limit: 100,
    })).map(filterUserForClient);

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