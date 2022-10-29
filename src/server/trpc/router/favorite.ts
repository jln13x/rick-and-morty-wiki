import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const favoriteRouter = router({
  toggleFavorite: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const character = await ctx.prisma.character.findUnique({
        where: {
          externalId: input.id,
        },
        include: {
          favoritedBy: {
            where: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      if (!character) {
        await ctx.prisma.character.create({
          data: {
            externalId: input.id,
            favoritedBy: {
              connect: {
                id: ctx.session.user.id,
              },
            },
          },
        });

        return;
      }

      // The favoritedBy Array is only not empty if the current user in session already favorited this character which means we should remove the favorite
      if (character.favoritedBy.length !== 0) {
        await ctx.prisma.character.update({
          data: {
            favoritedBy: {
              disconnect: {
                id: ctx.session.user.id,
              },
            },
          },
          where: {
            externalId: input.id,
          },
        });

        return;
      }

      await ctx.prisma.character.update({
        data: {
          favoritedBy: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
        where: {
          externalId: input.id,
        },
      });
    }),
  getFavorites: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirstOrThrow({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        favoriteCharacters: true,
      },
    });

    return user.favoriteCharacters.map(
      (favoriteCharacter) => favoriteCharacter.externalId
    );
  }),
});
