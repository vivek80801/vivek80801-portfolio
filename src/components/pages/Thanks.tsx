import React from "react";
import { Link } from "react-router-dom";

const Thanks: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>thanks for filling forms</h1>
      <h2>
        go back to<Link to="/">home</Link>
      </h2>
    </>
  );
};

export default Thanks;
