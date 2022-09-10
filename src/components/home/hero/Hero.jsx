import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO BPRS DANA AMANAH"
              title="Best Islamic Bank In Surakarta"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                BUKA TABUNGAN <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              {/* <button>
                LIHAT PRODUK <i className="fa fa-long-arrow-alt-right"></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
