import React from "react";

const HomePage: React.FC = (props) => {
  return (
    <>
      <h1 className="my-5 text-xl font-bold">Hello, welcome to my blog!</h1>
      <div className="flex flex-col space-y-2 divide-y">
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
        <p>Content 4</p>
      </div>
    </>
  );
};

export default HomePage;
