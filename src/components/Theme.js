export default function Theme() {
  return (
    <section className="Theme">
      <h3>Theme</h3>
      <legend>Select a Theme!</legend>
      <ul id="theme">
        <li className="theme-selection">
          <input type="radio" value="aniamls" name="theme" defaultChecked />
          Aniamls
        </li>
        <li className="theme-selection">
          <input type="radio" value="programming-languages" name="theme" />
          Programming Languages
        </li>
      </ul>
    </section>
  );
}
