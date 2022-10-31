import { getAllCharacters, getCharacter } from "@/features/character";
import {
  CharacterDetails,
  CharacterEpisodes,
} from "@/features/character/components";
import { Container } from "@/features/common/components";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<Props> = ({ character }) => {
  return (
    <Container className="h-full">
      <div className="flex h-full flex-col items-center md:flex-row md:items-start">
        <div className="w-[300px] flex-shrink-0">
          <CharacterDetails character={character} />
        </div>
        <div className="h-full">
          <CharacterEpisodes episodes={character.episode} />
        </div>
      </div>
    </Container>
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

export default Page;
