import ToggleButton from "../ToggleButton";
import "./index.scss";
import useChangeTheme from "../../../hooks/useChangeTheme";

const ThemeButton = () => {
  const [theme, setTheme] = useChangeTheme(true);
  const changeTheme = () => {
    setTheme();
  };
  return (
    <div className="theme-button">
      <ToggleButton changeExternalState={changeTheme} externalState={theme} />
    </div>
  );
};
export default ThemeButton;
