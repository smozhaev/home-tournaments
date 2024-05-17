import { NavLink } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
  return (
    <ul className="navbar_ul">
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/tournaments"}>Tournaments</NavLink>
      </li>
      <li>
        <NavLink to={"/organizer"}>For organizer</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
