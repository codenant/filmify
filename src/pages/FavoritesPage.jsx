import useFilmStore from "../stores/filmStore";
import FilmCard from "../components/FilmCard";

function FavoritesPage() {
  const { favorites } = useFilmStore();

  console.log(favorites);
  return (
    <div className="h-fit">
      {favorites.length === 0 ? (
        <p className="errorMessage">Hmm, this page looks a little empty.</p>
      ) : (
        <div className="grid grid-cols-4 px-12 py-8 gap-8">
          {favorites.map((film) => (
            <FilmCard film={film} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
