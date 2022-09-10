import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/courses">
                Produk
              </NavLink>
              <ul>
                <li>
                  <NavLink activeClassName="active" to="/simpanan">
                    Simpanan
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/">Tabungan</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Deposito</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/">Pembiayaan</NavLink>
                </li>
                <li>
                  <NavLink to="/">Jasa Lainnya</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/team">
                Pengurus
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/journal">
                Berita
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET REWARD</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
