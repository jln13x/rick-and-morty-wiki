import { getAllCharacters, getCharacter } from "@/features/character";
import {
  CharacterDetails,
  CharacterEpisodes,
} from "@/features/character/components";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const CharacterPage: NextPage<Props> = ({ character }) => {
  return (
    <div className="relative flex flex-col md:flex-row">
      <div className="md:sticky md:top-0 md:h-screen md:w-2/4 xl:w-1/4">
        <CharacterDetails character={character} />
      </div>
      <div className="h-full md:w-2/4 xl:w-3/4">
        <CharacterEpisodes episodes={character.episode} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id as string;
  const character = await getCharacter(id);

  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await getAllCharacters();

  return {
    paths: characters.map((character) => ({
      params: {
        id: character.id,
      },
    })),
    fallback: false,
  };
};

export default CharacterPage;
