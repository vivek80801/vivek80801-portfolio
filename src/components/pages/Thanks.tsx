import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Thanks: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>thanks for filling forms</h1>
      <h2>
        go back to{" "}
        <Link style={{ color: "#000042" }} to="/">
          Home
          <FaHome />
        </Link>
      </h2>
    </>
  );
};

export default Thanks;
