import React from "react";
import { useLocation } from "react-router";

const Error404: React.FC = (props) => {
  const location = useLocation();

  return (
    <>
    <div className="flex flex-col justify-center mt-52 items-center bg-red-100 h-96">
      <p className="font-bold text-5xl m-5">404</p>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
    </>
  );
};

export default Error404;
