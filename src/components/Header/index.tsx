import "./index.scss";
import DiceLogo from "../../assets/dice-svgrepo-com.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <a href="https://vitejs.dev" target="_blank">
          <img src={DiceLogo} className="header__title_logo" />
        </a>
        <h3>Home Tournaments</h3>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
