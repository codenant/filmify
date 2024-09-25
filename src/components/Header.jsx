import { Link } from "react-router-dom";
import logo from "../assets/filmify_original.png";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <div className="w-full h-[120px] bg-flatBlack flex flex-row justify-between">
      <div className="flex flex-row my-auto pl-8">
        <img src={logo} alt="filmify logo" className="w-[120px] h-[45px]" />
      </div>
      <Searchbar />
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
