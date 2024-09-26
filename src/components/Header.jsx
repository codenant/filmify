import { Link } from "react-router-dom";
import logo from "../assets/filmify_original.png";
import SearchBar from "./SearchBar";
import useFilmStore from "../stores/filmStore";

function Header() {
  // clear the search bar when the site logo is clicked
  const setSearchInput = useFilmStore((state) => state.setSearchInput);
  const handleClick = () => {
    setSearchInput("");
  };

  return (
    <div className="w-full h-[120px] bg-flatBlack flex flex-row justify-between">
      <div className="flex flex-row my-auto pl-8">
        <Link to="/">
          <img
            src={logo}
            alt="filmify logo"
            className="w-[120px] h-[45px]"
            onClick={handleClick}
          />
        </Link>
      </div>
      <SearchBar />
      <div className="my-auto m-8">
        <button className="authButton">sign in</button>
        <button className="authButton border-2 border-mango hover:bg-mango transition duration-300 ease-in-out rounded-[50px] p-[6px] ml-4">
          sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
