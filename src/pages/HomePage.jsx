import { useEffect } from "react";
import useFilmStore from "../stores/filmStore";
import PreLoader from "./PreLoader";
import FilmCard from "../components/FilmCard";

function HomePage() {
  let {
    displayFilms,
    fetchPopular,
    searchInput,
    fetchFilms,
    searchFilms,
    isLoading,
    isError,
  } = useFilmStore();

  useEffect(() => {
    if (searchInput === "") {
      fetchPopular(); // display popular films if search bar is empty
    } else {
      fetchFilms(searchInput); // otherwise call the search api
    }
  }, [searchInput]);

  const display = searchInput === "" ? displayFilms : searchFilms; // ternary operator to change the array needed to map through based on if the search bar is empty or not

  return (
    <div className="h-fit">
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <h1
            className={`${
              searchInput === "" ? "block" : "hidden"
            } font-bold font-lato text-flatWhite text-2xl md:pl-14 pt-10 text-center md:text-left`}
          >
            Timeless Movies
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 py-8 gap-8">
            {display?.map((film) => (
              <FilmCard film={film} key={film.imdbID} />
            ))}
          </div>
        </div>
      )}
      {isError && <div className="errorMessage">{isError}</div>}
    </div>
  );
}

export default HomePage;
