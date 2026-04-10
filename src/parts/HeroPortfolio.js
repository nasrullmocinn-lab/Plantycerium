/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/porto.jpeg';

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">About Plant</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Platycerium bifurcatum atau paku tanduk rusa merupakan tumbuhan epifit yang hidup menempel di pohon. Rhizoma menempel pada pohon inang, berwarna coklat,dan tertutup oleh daun-daun penyangga sehingga tidak terlihat. Daunnya tunggal bercabang menggarpu, berwarna hijau muda, permukaan daunnya kasar, ujung daun runcing, tepi daun rata, pangkal daun runcing, dan pada permukaan daun bagian bawah berbulu tipis. Spora terdapat di ujung daun bagian bawah yang menutupi seluruh permukaan berwarna coklat. </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
