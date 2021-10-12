import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <div>
        <h2>Oops! It's A Dead End</h2>
        <br />
        <Link to='/'>Back to Home</Link>
      </div>
    </main>
  );
};

export default Error;
