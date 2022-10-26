import { InferGetStaticPropsType, NextPage } from "next";
import { getAllCharacters } from "@/features/character";
import { CharacterCard } from "@/features/character/components";
import { Container } from "@/features/common/components";

const CharactersPage: NextPage<Props> = ({ characters }) => {
  return (
    <Container className="grid grid-cols-4 gap-8 py-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
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
