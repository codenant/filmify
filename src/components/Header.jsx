import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/filmify_original.png";
import SearchBar from "./SearchBar";
import useFilmStore from "../stores/filmStore";
import Heart from "./Heart";

function Header() {
  const setSearchInput = useFilmStore((state) => state.setSearchInput);

  // manage hamburger menu for small screens
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  // to clear the search bar when the site logo and the favorites page are clicked
  const handleClear = () => {
    setSearchInput("");
  };

  return (
    <div className="w-full h-[120px] bg-flatBlack flex flex-row justify-between md:justify-evenly">
      <div className="my-auto pl-8">
        <Link to="/">
          <img
            src={logo}
            alt="Filmify Logo"
            className="w-[120px] h-[45px]"
            onClick={handleClear}
          />
        </Link>
      </div>
      <div className="md:hidden absolute top-9 right-8">
        <button onClick={handleMenu}>
          {isOpen ? (
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-flatWhite w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-flatWhite w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-row">
        <SearchBar className="hidden md:block px-8" />
        <div className="flex flex-row gap-8 font-bold text-flatWhite my-auto m-8">
          <Link to="/favorites">
            <Heart
              className="hidden md:block h-[40px] w-[40px] hover:fill-mango hover:stroke-mango dark:text-mango"
              onClick={handleClear}
            />
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden absolute top-28 flex flex-col gap-8 justify-center items-center bg-inherit w-full rounded-br-xl rounded-bl-xl pb-10 shadow-md">
          <SearchBar />
          <div className="text-flatWhite my-auto m-8">
            <Link to="/favorites">
              <h1
                className="font-semibold text-2xl hover:underline hover:text-mySlate hover:opacity-80
                "
                onClick={handleClear}
              >
                favorites
              </h1>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
