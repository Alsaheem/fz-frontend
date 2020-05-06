import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand text-white font-weight-bold">
            Gold-Digger
          </h3>
          <nav className="nav nav-masthead justify-content-center">
            <Link to="/">
              <a className="nav-link active text-white">
                <u>Home</u>
              </a>
            </Link>
            <Link to="/contact">
              <a className="nav-link text-white">
                <u>Contact</u>
              </a>
            </Link>
            <a
              className="nav-link text-white"
              href="https://github.com/Alsaheem/FZscroper-toffy"
              target="_blank"
            >
              <u>Github</u>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
