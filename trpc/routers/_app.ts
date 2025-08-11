import { z } from "zod";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  invoke: baseProcedure
    .input(
      z.object({
        email: z.email(),
      })
    )
    .mutation(async ({ input }) => {
      await inngest.send({
        name: "test/hello.world",
        data: {
          email: input.email,
        },
      });

      return { ok: "success" };
    }),
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
