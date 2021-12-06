import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div>
      <h3>FooterMenu</h3>
      <div className="row mx-0">
        <div className="col">
          <ul>
            <li>
              <a href="">Demo Link</a>
            </li>
            <li>
              <a href="">Demo Link</a>
            </li>
            <li>
              <a href="">Demo Link</a>
            </li>
            <li>
              <a href="">Demo Link</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
