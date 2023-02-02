import { useState } from "react";

export default function Theme({ handleChangeTheme }) {
  const [theme, setTheme] = useState("animals");

  function onChangeValue(e) {
    setTheme(e.target.value);
    handleChangeTheme(e.target.value);
  }

  return (
    <section className="Theme">
      <h3>Theme</h3>
      <legend>Select a Theme!</legend>
      <ul id="theme" onChange={onChangeValue}>
        <li className="theme-selection">
          <input
            type="radio"
            value="animals"
            name="theme"
            checked={theme === "animals"}
          />
          Animals
        </li>
        <li className="theme-selection">
          <input
            type="radio"
            value="programming"
            name="theme"
            checked={theme === "programming"}
          />
          Programming Related
        </li>
      </ul>
    </section>
  );
}
