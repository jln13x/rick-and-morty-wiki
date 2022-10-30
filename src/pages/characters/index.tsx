import {
  CharacterCard,
  useInfiniteCharacters,
  getCharacters,
} from "@/features/character";
import { Container, LoadMore } from "@/features/common/components";
import { InferGetStaticPropsType, NextPage } from "next";

const CharactersPage: NextPage<Props> = ({ characters }) => {
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteCharacters({
    initialData: {
      pageParams: [1],
      pages: [characters],
    },
  });

  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.pages.map((p) =>
          p.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
      <LoadMore
        className="mx-auto mt-12 flex"
        isLoading={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        fireOnIntersection
      />
    </Container>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const characters = await getCharacters(1);

  return {
    props: {
      characters,
    },
  };
};

export default CharactersPage;
