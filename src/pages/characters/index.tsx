import { InferGetStaticPropsType, NextPage } from "next";
import { getAllCharacters } from "@/features/character";
import { CharacterCard } from "@/features/character/components";
import { Container } from "@/features/common/components";

const CharactersPage: NextPage<Props> = ({ characters }) => {
  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-8">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </Container>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const characters = await getAllCharacters();

  return {
    props: {
      characters,
    },
  };
};

export default CharactersPage;
