import styles from "./Toggle.module.css";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

function Toggle() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const storageTheme = localStorage.getItem("theme");

  if (storageTheme === "light") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      <label className={styles.toggle}>
        <input
          defaultChecked={storageTheme === "light"}
          type="checkbox"
          onChange={toggleTheme}
        />
        <FiSun className={`${styles.sun} text-[20px]`} />
        <FiMoon className={`${styles.moon} text-[20px]`} />
      </label>
    </div>
  );
}

export default Toggle;
