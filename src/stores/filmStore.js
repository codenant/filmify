import { create } from "zustand";

const apiKey = import.meta.env.VITE_API_KEY; // accessing api key without exposing it

// random popular films to display on the homepage
const popularFilms = [
  "Harry Potter",
  "Avengers",
  "Batman",
  "John Wick",
  "The Godfather",
];
const randomPopular = () => {
  const randomIndex = Math.floor(Math.random() * popularFilms.length);
  return popularFilms[randomIndex];
};

// start of state management
const useFilmStore = create((set) => ({
  displayFilms: [], // films to display on the landing page
  filmDetails: null, // display film details
  searchFilms: [],

  searchInput: "", // storing input values
  setSearchInput: (input) => set({ searchInput: input }),

  isLoading: false,
  isError: null,

  // add/remove favorites functionality with local storage syncing
  favorites: JSON.parse(localStorage.getItem("favorites") || []),
  addFavorite: (film) =>
    set((state) => {
      const addedFavorites = [...state.favorites, film];
      localStorage.setItem("favorites", JSON.stringify(addedFavorites));
      return { favorites: addedFavorites };
    }),
  removeFavorite: (imdbID) =>
    set((state) => {
      const removedFavorites = state.favorites.filter(
        (film) => film.imdbID !== imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(removedFavorites));
      return { favorites: removedFavorites };
    }),

  // calling the api for random popular films using async/await
  fetchPopular: async () => {
    const popularTitles = randomPopular(); // invoking the randomness
    set({ isLoading: true, isError: null }); // set initial states

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${popularTitles}&type=movie&apikey=${apiKey}&`
      );
      const data = await response.json();

      set({ displayFilms: data.Search }); // store fetched popular films
    } catch (error) {
      set({ isError: "Oh no, looks like we can't find relevant titles" });
    } finally {
      set({ isLoading: false }); // set the loading back to false after data is fetched
    }
  },

  // calling the api to display films based on user input
  fetchFilms: async (searchInput) => {
    set({ isLoading: true, isError: null });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${apiKey}&`
      );
      const data = await response.json();

      if (data.Response === "True") {
        set({ searchFilms: data.Search }); // store fetched films according to user input
      } else {
        set({
          searchFilms: [], // clear previous search results
          isError: "Keep typing or check your spelling.",
        });
      }
    } catch (error) {
      set({ isError: "Oh no, something might've went wrong." });
    } finally {
      set({ isLoading: false });
    }
  },

  // calling api to display film details
  fetchDetails: async (imdbID) => {
    set({ isLoading: true, isError: null });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&`
      );
      const data = await response.json();

      set({ filmDetails: data }); // store fetched film details
    } catch (error) {
      set({ isError: "Oh no, looks like no film details are available" });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useFilmStore;
