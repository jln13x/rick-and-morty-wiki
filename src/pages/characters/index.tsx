import { useInfiniteCharacters, getCharacters } from "@/features/character";
import { CharacterList } from "@/features/character/components";
import { Container, LoadMore } from "@/features/common/components";
import { InferGetStaticPropsType, NextPage } from "next";
import { useMemo } from "react";

const CharactersPage: NextPage<Props> = ({
  characters: charactersFromProps,
}) => {
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteCharacters({
    initialData: {
      pageParams: [1],
      pages: [charactersFromProps],
    },
  });

  const characters = useMemo(
    () => data?.pages.flatMap((page) => page.characters.results),
    [data]
  );

  return (
    <Container>
      {characters && <CharacterList characters={characters} />}
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
