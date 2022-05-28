import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
          </span>{" "}
          Shawn Willard
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              <span onClick={() => handleClick("About")}>About Me</span>
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
              <span onClick={() => handleClick("Portfolio")}>Portfolio</span>
            </a>
          </li>
          <li className={"mx-2"}>
            <a data-testid="Contact" href="#contact">
              <span onClick={() => handleClick("Contact")}>Contact</span>
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
