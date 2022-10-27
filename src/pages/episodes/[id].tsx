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
    <div className="relative flex flex-col md:flex-row">
      <div className="md:sticky md:top-0 md:h-screen md:w-2/4 xl:w-1/4">
        <EpisodeDetails episode={episode} />
      </div>
      <div className="h-full md:w-2/4 xl:w-3/4">
        <EpisodeCharacters characters={episode.characters} />
      </div>
    </div>
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
