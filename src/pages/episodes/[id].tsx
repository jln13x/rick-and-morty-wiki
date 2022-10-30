import { Container } from "@/features/common/components";
import { getAllEpisodes, getEpisode } from "@/features/episode";
import {
  EpisodeDetails,
  EpisodeCharacters,
} from "@/features/episode/components";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const EpisodePage: NextPage<Props> = ({ episode }) => {
  return (
    <Container className="h-full">
      <div className="relative flex h-full flex-col md:flex-row ">
        <div>
          <EpisodeDetails episode={episode} />
        </div>
        <div className="h-full">
          <EpisodeCharacters characters={episode.characters} />
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id as string;
  const episode = await getEpisode(id);

  return {
    props: {
      episode,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const episodes = await getAllEpisodes();

  return {
    paths: episodes.map((episode) => ({
      params: {
        id: episode.id,
      },
    })),
    fallback: false,
  };
};

export default EpisodePage;
