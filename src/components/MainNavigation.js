import React from 'react';
import Image from 'next/image';
import iconMobile from '../img/icon-mobile.png';
import iconEmail from '../img/icon-email.png';
import iconFace from '../img/icon-face.png';
import iconYoutube from '../img/icon-youtube.png';
import iconTwitter from '../img/icon-twitter.png';
import iconInstagram from '../img/icon-instagram.png';
import inconLinkelin from '../img/icon-linkelin.png';
import logoMobile from '../img/logo-mobile.png';
import nav from '../styles/Nav.module.css';

export default function MainNavigation() {
  return (
    // MOBILE
    <div>
      <div className={nav.navMobile}>
        <div className="container">
          <div className={nav.navContactMobile}>
            <div className={nav.number}>
              <a href="tel:3005629015">
                <Image src={iconMobile} alt="icon-mobile" />
                <span>300-562 90 15</span>
              </a>
            </div>
            <div className={nav.email}>
              <a href="mailto:info@albertogil.com">
                <Image src={iconEmail} alt="icon-email" />
                <span>leonard6902001@yahoo.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* DESK */}
      <div className={nav.navContainerDesk}>
        <div className={nav.navDesk}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={nav.navContactDesk}>
                  <div className={nav.numberDesk}>
                    <a href="tel:3005629015">
                      <Image src={iconMobile} alt="icon-mobile" />
                      <span>300-562 90 15</span>
                    </a>
                  </div>
                  <div className={nav.emailDesk}>
                    <a href="mailto:info@albertogil.com">
                      <Image src={iconEmail} alt="icon-email" />
                      <span>leonard6902001@yahoo.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={nav.navIconAndContact}>
                  <div className={nav.navRedSocial}>
                    <div>
                      <a href="#">
                        <div className={nav.iconFace}>
                          <Image
                            className="image"
                            src={iconFace}
                            alt="icon-mobile"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div className={nav.icon}>
                          <Image
                            className="image"
                            src={iconTwitter}
                            alt="icon-mobile"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div className={nav.icon}>
                          <Image
                            className="image"
                            src={iconYoutube}
                            alt="icon-mobile"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div className={nav.icon}>
                          <Image
                            className="image"
                            src={inconLinkelin}
                            alt="icon-mobile"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div className={nav.icon}>
                          <Image
                            className="image"
                            src={iconInstagram}
                            alt="icon-mobile"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={nav.contactDesk}>
                    <a href="mailto:info@albertogil.com">
                      <button>
                        <Image src={iconEmail} alt="icon-email" />
                        <span>Contáctame</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={nav.navMobileBootstrap}>
        {/* Nav mobile */}
        <nav className="navbar navbar-expand-lg">
          <div className="container col-12">
            <a className="navbar-brand" href="#">
              <div className={nav.logoMobile}>
                <Image src={logoMobile} alt="logo" />
              </div>
            </a>
            <button
              className={nav.navbarToggler}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={nav.navbarTogglerIcon} />
            </button>
            <div
              className="collapse justify-content-end navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#inicioMobile"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#acerca">
                    Acerca
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#servicios">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contactenosMobile">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* nav desk */}
      <div className="container">
        <nav className={nav.HeaderContainerDesk}>
          <div className={nav.containerDeskNav}>
            <div className={nav.navlogoDesk}>
              <Image src={logoMobile} alt="logo" />
            </div>
            <div className={nav.barNav}>
              <ul>
                <li>
                  <a href="#inicioDesk">Inicio</a>
                </li>
                <li>
                  <a href="#acerca">Acerca</a>
                </li>
                <li>
                  <a href="#servicios">Servicios</a>
                </li>
                <li>
                  <a href="#contactenosDesk">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
