import React from "react";

const Home = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>Courses 4 Arab</h1>

        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="#">
              {" "}
              HTML{" "}
            </a>

            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="#">
              {" "}
              CSS{" "}
            </a>

            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>

              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>

                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="#">
              {" "}
              JavaScript{" "}
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon&#128293;</a>
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
              HTML <i className="fas fa-plus"></i>{" "}
            </label>
            <input id="html" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="css">
              CSS <i className="fas fa-plus"></i>{" "}
            </label>
            <input id="css" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>

              <li>
                <label className="mini-projects" for="mini">
                  mini projects <i className="fas fa-plus"></i>{" "}
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label for="js">
              JavaScript <i className="fas fa-plus"></i>{" "}
            </label>
            <input id="js" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="">coming soon&#128293;</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        Respossive Drop-down <br/>
        Menu Bar <br/>
        HTML & CSS only
      </main>
      <footer>
        Designed and developed by Courses4Arab.com
      <span>&#129505;</span>
      </footer>
    </div>
  );
};

export default Home;
