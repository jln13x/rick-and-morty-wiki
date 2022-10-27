import create from "zustand";

interface StoreState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const useFavoritesStore = create<StoreState>((set) => ({
  favorites: [],
  toggleFavorite: (id: string) => {
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
