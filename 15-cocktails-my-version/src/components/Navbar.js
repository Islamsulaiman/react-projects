import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div>
      <section style={{ width: "200px" }}>
        <Link to='/'>
          <img src={logo} alt='page logo' />
        </Link>
      </section>
      <section>
        <Link to='/' style={{ marginRight: "30px" }}>
          Home
        </Link>
        <Link to='/about'>About</Link>
      </section>
    </div>
  );
};

export default Navbar;
