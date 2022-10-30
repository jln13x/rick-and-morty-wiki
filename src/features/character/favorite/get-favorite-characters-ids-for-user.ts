import { prisma } from "@/server/db/client";

export const getFavoriteCharacterIdsForUser = async (userId: string) => {
  const userWithFavoriteCharacters = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
    include: {
      favoriteCharacters: true,
    },
  });

  return userWithFavoriteCharacters.favoriteCharacters.map(
    (character) => character.externalId
  );
};
