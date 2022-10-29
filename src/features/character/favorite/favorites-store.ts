import create from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  favorites: string[];
  toggleFavorite: ({ id }: { id: string }) => void;
}

const store = persist<StoreState>((set) => ({
  favorites: [],
  toggleFavorite: ({ id }) => {
    set((state) => {
      if (state.favorites.includes(id)) {
        return {
          favorites: state.favorites.filter((favorite) => favorite !== id),
        };
      }

      return {
        favorites: [...state.favorites, id],
      };
    });
  },
}));

export const useFavoritesStore = create(store);
