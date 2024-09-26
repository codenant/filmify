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

const useFilmStore = create((set) => ({
  displayFilms: [], // films to display on the landing page
  filmDetails: null, // display film details
  searchFilms: [],

  searchInput: "", // storing input values
  setSearchInput: (input) => set({ searchInput: input }),

  isLoading: false,
  isError: null,

  // calling the api for random popular films using async/await
  fetchPopular: async () => {
    const popularTitles = randomPopular(); // invoking the randomness
    set({ isLoading: true });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${popularTitles}&type=movie&apikey=${apiKey}&`
      );
      const data = await response.json();

      set({ displayFilms: data.Search }); // store fetched popular films
    } catch (error) {
      set({ isError: error.message });
    } finally {
      set({ isLoading: false }); // set the loading back to false after data is fetched
    }
  },

  // calling the api to display films based on user input
  fetchFilms: async (searchInput) => {
    set({ isLoading: true });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${apiKey}&`
      );
      const data = await response.json();

      set({ searchFilms: data.Search }); // store fetched films according to user input
    } catch (error) {
      set({ isError: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  // calling api to display films on user input through film's ID
  fetchDetails: async (imdbID) => {
    set({ isLoading: true });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&`
      );
      const data = await response.json();

      set({ filmDetails: data }); // store fetched film details
    } catch (error) {
      set({ isError: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useFilmStore;
