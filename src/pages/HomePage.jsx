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
        <div className="grid grid-cols-4 px-12 py-8 gap-8">
          {display?.map((film) => (
            <FilmCard film={film} />
          ))}
        </div>
      )}
      {isError && <div className="errorMessage">{isError}</div>}
    </div>
  );
}

export default HomePage;
