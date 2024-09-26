import { useEffect } from "react";
import useFilmStore from "../stores/filmStore";
import { Link } from "react-router-dom";

function HomePage() {
  let { displayFilms, fetchPopular, searchInput, fetchFilms, searchFilms } =
    useFilmStore();

  useEffect(() => {
    if (searchInput === "") {
      fetchPopular(); // display popular films if search bar is empty
    } else {
      fetchFilms(searchInput); // otherwise call the search api
    }
  }, [searchInput]);

  const display = searchInput === "" ? displayFilms : searchFilms; // ternary operator to change the array needed to map through based on if the search bar is empty or not

  return (
    <div className="grid grid-cols-4 px-12 py-8 gap-8">
      {display?.map((film) => (
        <div
          key={film.imdbID}
          className="flex flex-col justify-center items-center"
        >
          <div>
            <Link to={`/details/${film.imdbID}`}>
              <img
                src={film.Poster}
                alt={film.Title}
                className="w-[173px] h-[256px] shadow-md rounded-md hover:scale-105 transition duration-300 ease-in-out object-cover"
              />
            </Link>
          </div>
          <div className="w-[173px] mt-2">
            <Link to={`/details/${film.imdbID}`}>
              <h2 className="font-lato text-flatWhite font-semibold text-sm hover:text-mySlate hover:opacity-70 transition duration-200 ease-in-out">
                {film.Title}
              </h2>
            </Link>
            <p className="font-lato text-mySlate opacity-35">{film.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
