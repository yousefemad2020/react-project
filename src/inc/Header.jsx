import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>Courses 4 Arab</h1>

        <ul className="flex">
          <li className="main-list">
            <Link className="main-link" to="/html">
              HTML
            </Link>

            <ul className="sub-ul">
              <li>
                <Link href="">Full Course</Link>
              </li>
              <li>
                <Link href="">Crash Course</Link>
              </li>
              <li>
                <Link href="">learn in 1h</Link>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <Link className="main-link" to="/css">
              CSS
            </Link>

            <ul className="sub-ul">
              <li>
                <Link href="">Full Course</Link>
              </li>
              <li>
                <Link href="">CSS Examples</Link>
              </li>

              <li className="mini-projects">
                <Link href="">mini projects&nbsp; + </Link>

                <ul className="sub-sub-ul">
                  <li>
                    <Link href="">project 1</Link>
                  </li>
                  <li>
                    <Link href="">project 2</Link>
                  </li>
                  <li>
                    <Link href="">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <Link className="main-link" to="/javascript">
              JavaScript
            </Link>
            <ul className="sub-ul sub-of-js">
              <li>
                <Link href="">coming soon&#128293;</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>

        <label className="absolute" for="burger">
          <i className="fas fa-bars"></i>
        </label>

        <input id="burger" type="checkbox" />

        <div className="show-on-click">
          <div className="main-div">
            <label for="html">
              HTML <i className="fas fa-plus"></i>
            </label>
            <input id="html" type="checkbox" />

            <ul className="sub-div">
              <li>
                <Link href="">Full Course</Link>
              </li>
              <li>
                <Link href="">Crash Course</Link>
              </li>
              <li>
                <Link href="">learn in 1h</Link>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="css">
              CSS <i className="fas fa-plus"></i>
            </label>
            <input id="css" type="checkbox" />

            <ul className="sub-div">
              <li>
                <Link href="">Full Course</Link>
              </li>
              <li>
                <Link href="">CSS Examples</Link>
              </li>

              <li>
                <label className="mini-projects" for="mini">
                  mini projects <i className="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <Link href="">project 1</Link>
                  </li>
                  <li>
                    <Link href="">project 2</Link>
                  </li>
                  <li>
                    <Link href="">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="js">
              JavaScript <i className="fas fa-plus"></i>
            </label>
            <input id="js" type="checkbox" />

            <ul className="sub-div">
              <li>
                <Link href="">coming soon&#128293;</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
