import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const NavBar: React.FC = (props) => {

  const itemStyle = () => "p-2 hover:bg-black hover:text-white";

  return (
    <div>
      <nav className="flex w-screen border-black border-b-2">
        <ul className="flex-1 flex justify-center mr-auto mx-2">
          <li className={itemStyle()}>
            <Link to="/">Home</Link>
          </li>
          <li className={itemStyle()}>
            <Link to="/about">About</Link>
          </li>
          <li className={itemStyle()}>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
