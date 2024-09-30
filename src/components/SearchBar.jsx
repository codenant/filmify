import useFilmStore from "../stores/filmStore";

function SearchBar({ className }) {
  let { searchInput, setSearchInput } = useFilmStore();

  return (
    <div className={`${className} my-auto`}>
      <div className="flex flex-row my-auto">
        <input
          type="text"
          placeholder="find your favorite films"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // accessing input values
          className="sm:w-[350px] md:w-[432px] lg:w-[680px] h-[45px] border-[3px] border-flatBlack rounded-[55px] bg-faded placeholder:text-center md:placeholder:text-left placeholder:font-semibold placeholder:text-mySlate placeholder:opacity-20 text-mySlate p-2"
        />
        <svg
          className="hidden md:block text-flatWhite md:w-[18px] md:h-[18px] -translate-x-9 translate-y-3"
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
    </div>
  );
}

export default SearchBar;
