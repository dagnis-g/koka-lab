import React from 'react';

const Footer = () => (
  <footer className="pt-5 border-top bg-light">
    <div className="custom-container mb-5 pb-3 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">Kontakti</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5 mb-3 d-block font-color-medium">
              Tālrunis: +371 28150759<br></br>
              E-pasts: kokalaboratorija@gmail.com<br></br> Adrese: Raiņa iela 22 Alsunga, LV - 3306
              <br></br> Rekvizīti: KOKA LABORATORIJA IK <br></br>LV70HABA0551049954048 <br></br>
              Reģ.nr. 40002187885
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">Seko Mums</p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.instagram.com/kokalaboratorija/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/Kokalaboratorija/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-dark border-top">
        <div className="custom-container d-flex  align-items-center justify-content-center">
          <div className="text-light font-size-caption py-4">
            &copy; {new Date().getFullYear()} Koka Laboratorija
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
