import { CharacterList } from "@/features/character/components";
import { useFavoriteCharacters } from "@/features/character/favorite";
import { getFavoriteCharacterIdsForUser } from "@/features/character/favorite/get-favorite-characters-ids-for-user";
import { getServerAuthSession } from "@/server/common/get-server-auth-session";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page: NextPage<Props> = ({ favoriteCharacterIds }) => {
  const {
    data: favoriteCharacters,
    isLoading,
    isError,
  } = useFavoriteCharacters(favoriteCharacterIds);

  // Quick and dirty
  if (isLoading || isError || favoriteCharacters.length === 0) {
    return (
      <div className="grid h-full place-items-center text-2xl tracking-wide">
        {isLoading && <p>Loading your favorite characters... </p>}
        {isError && (
          <p className="font-bold text-rose-600">
            An error occured loading your favorite characters.
          </p>
        )}
        {favoriteCharacters && favoriteCharacters.length === 0 && (
          <p>You don&apos;t have any favorite characters yet.</p>
        )}
      </div>
    );
  }

  return <CharacterList characters={favoriteCharacters} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  if (!session || !session.user) {
    return {
      // needed for proper typing of `InferGetServerSidePropsType`
      props: {
        favoriteCharacterIds: [],
      },
      redirect: {
        destination: "/characters",
        permanent: false,
      },
    };
  }

  const favoriteCharacterIds = await getFavoriteCharacterIdsForUser(
    session.user.id
  );

  return {
    props: {
      favoriteCharacterIds,
    },
  };
};

export default Page;
