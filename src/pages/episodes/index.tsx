import { InferGetStaticPropsType, NextPage } from "next";
import { Container } from "@/features/common/components";
import { getAllEpisodes } from "@/features/episode";
import { EpisodeCard } from "@/features/episode/components";

const Page: NextPage<Props> = ({ episodes }) => {
  return (
    <Container className="flex flex-wrap justify-center gap-8">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </Container>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const episodes = await getAllEpisodes();

  return {
    props: {
      episodes,
    },
  };
};

export default Page;
