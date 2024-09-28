import useFilmStore from "../stores/filmStore";
import FilmCard from "../components/FilmCard";

function FavoritesPage() {
  const { favorites } = useFilmStore();

  return (
    <div className="h-fit">
      {favorites.length === 0 ? (
        <p className="errorMessage">Hmm, this page looks a little empty.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 py-8 gap-8">
          {favorites.map((film) => (
            <FilmCard film={film} key={film.imdbID} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
