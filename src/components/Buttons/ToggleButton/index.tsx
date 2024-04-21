import { useState } from "react";
import "./index.scss";
import "./types";
import useChangeTheme from "../../../hooks/useChangeTheme.tsx";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [changeTheme, setChangeTheme]: any = useChangeTheme(true);
  const toggleButton = () => {
    setIsActive(!isActive);
    setChangeTheme(!changeTheme);
  };

  return (
    <button className={`toggle-button ${isActive ? "active" : ""}`} onClick={toggleButton}>
      <span className="toggle-thumb"></span>
    </button>
  );
};

export default ToggleButton;
