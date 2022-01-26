import { Link } from "react-router-dom";

export const NavBar = () => {
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
            <Link to="/review">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
