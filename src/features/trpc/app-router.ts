// src/server/trpc/router/_app.ts
import { router } from "./utils";
import { favoriteRouter } from "@/features/character/favorite/favorite-router";
import { authRouter } from "@/features/auth/auth-router";

export const appRouter = router({
  auth: authRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
