import { router, publicProcedure } from "@/features/trpc/utils";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});
