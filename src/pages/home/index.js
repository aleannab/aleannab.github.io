import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TextWithLineBreaks from '../../components/textWithLineBreaks';
import { introdata, meta } from '../../content_option';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 " style={{ backgroundImage: `url(${introdata.your_img_url})` }}></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h3 className="mb-1x">{introdata.intro}</h3>
                <h1 className="mb-1x highlight color_accent">
                  <TextWithLineBreaks text={introdata.title} />
                </h1>
                <h3 className="fluidz-48 mb-1x">
                  <TextWithLineBreaks text={introdata.tagline} />
                </h3>
                <div className="intro_btn-action pb-3">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <div className="intro_btn-action pb-5">
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
