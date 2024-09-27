import useFilmStore from "../stores/filmStore";
import { Link } from "react-router-dom";
import Heart from "./Heart";

function FilmCard({ film }) {
  const { favorites, addFavorite, removeFavorite } = useFilmStore();

  const toggleFavorite = (film) => {
    // "some" method to check the entire object
    const included = favorites.some((fav) => fav.imdbID === film.imdbID);
    if (included) {
      removeFavorite(film.imdbID);
    } else {
      addFavorite(film);
    }
  };
  return (
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
      <div className="w-[173px] mt-2 flex flex-row gap-5 justify-between">
        <div className="flex flex-col">
          <Link to={`/details/${film.imdbID}`}>
            <h2 className="font-lato text-flatWhite font-semibold text-sm hover:text-mySlate hover:opacity-70 transition duration-200 ease-in-out">
              {film.Title}
            </h2>
          </Link>
          <p className="font-lato text-mySlate opacity-35">{film.Year}</p>
        </div>
        <Heart
          onClick={() => toggleFavorite(film)}
          className={
            favorites.some((fav) => fav.imdbID === film.imdbID)
              ? "favButton w-[20px] h-[20px] fill-flatWhite object-cover"
              : "favButton w-[20px] h-[20px] fill-none object-cover"
          }
        />
      </div>
    </div>
  );
}

export default FilmCard;
