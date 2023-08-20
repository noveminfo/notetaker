import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({ folderId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.topic.findMany({
        where: {
          folderId: input.folderId,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({ folderId: z.string(), title: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.topic.create({
        data: {
          title: input.title,
          folderId: input.folderId,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.topic.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
