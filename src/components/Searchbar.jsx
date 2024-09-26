import useFilmStore from "../stores/filmStore";
import { useState } from "react";

function SearchBar() {
  let { searchInput, setSearchInput, fetchFilms } = useFilmStore();

  return (
    <div className="flex flex-row justify-between my-auto">
      <input
        type="text"
        placeholder="find your favorite films"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} // accessing input values
        className="w-[726px] h-[45px] border-[1px] border-flatBlack rounded-[55px] bg-faded placeholder:text-mySlate placeholder:opacity-20 text-mySlate p-2"
      />
      <svg
        className="text-flatWhite w-[18px] h-[18px] -translate-x-9 translate-y-3"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        ></path>
      </svg>
    </div>
  );
}

export default SearchBar;
