import "./index.scss";
import DiceLogo from "../../assets/dice-svgrepo-com.svg";
import Navbar from "./Navbar/index.tsx";
import { NavLink } from "react-router-dom";
import ThemeButton from "../Buttons/ThemeButton/index.tsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <a href="https://vitejs.dev" target="_blank">
          <img src={DiceLogo} className="header__title_logo" />
        </a>
        <h3>
          <NavLink to={"/"}>Home Tournaments</NavLink>
        </h3>
      </div>
      <div className="header__container">
        <Navbar />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
