import { HeartOutline, HeartSolid } from "@/features/common/components/icons";
import { Character } from "../types";
import { useFavorite } from "./use-favorite";

interface Props {
  character: Character;
}

const FavoriteMark = ({ character }: Props) => {
  const { toggleFavorite, favorites } = useFavorite();
  const isFavorite = favorites.includes(character.id);

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: character.id,
    });
  };

  return (
    <button
      onClick={handleToggleFavorite}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? (
        <HeartSolid className="aspect-square w-6 fill-rose-600" />
      ) : (
        <HeartOutline className="aspect-square w-6 stroke-rose-600/60" />
      )}
    </button>
  );
};

export default FavoriteMark;
