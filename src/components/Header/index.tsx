import "./index.scss";
import DiceLogo from "../../assets/dice-svgrepo-com.svg";
import Navbar from "./Navbar/index.tsx";
import { NavLink } from "react-router-dom";
import ThemeButton from "../Buttons/ThemeButton/index.tsx";
import AuthButton from "../Buttons/AuthButton";

const Header = () => {
  const handleLogin = () => {
    console.log('LoginForm clicked');
  };
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
        <AuthButton onClick={handleLogin} label="Login" />
      </div>
    </header>
  );
};

export default Header;
