import React from 'react';
import Image from 'next/image';
import logoMobile from '../img/logo-mobile.png';
import yellowFaceIcon from '../img/icon-face-yellow.png';
import yellowTwitterIcon from '../img/icon-twitter-yellow.png';
import yellowYoutubeIcon from '../img/icon-youtube-yellow.png';
import yellowInstagramIcon from '../img/icon-insta-yellow.png';
import yellowLinkedinIcon from '../img/icon-linkedin-yellow.png';
import iconDirection from '../img/icon-direction.png';
import iconTelefono from '../img/icon-mobile.png';
import iconMail from '../img/icon-email.png';
import footer from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={footer.containerMobileFooter}>
        <div className={footer.superiorMobileFooter}>
          <Image src={logoMobile} alt="logo" />
          <p className={footer.descripMobile}>
            Este es un sitio web informativo sobre los servicios ofrecidos por
            el Abogado Penalista William Leonardo Gil Casallas
          </p>
          {/* iconos */}
          <div className={footer.groupSocial}>
            <div className={footer.yellowFace}>
              <div>
                <Image src={yellowFaceIcon} alt="yellowface-icon" />
              </div>
            </div>
            <div className={footer.yellowTwitter}>
              <Image src={yellowTwitterIcon} alt="yellowTwitter-icon" />
            </div>
            <div className={footer.yellowYoutube}>
              <Image src={yellowYoutubeIcon} alt="yellowYoutube-icon" />
            </div>
            <div className={footer.yellowLinkedin}>
              <Image src={yellowLinkedinIcon} alt="yellowLinkedin-icon" />
            </div>
            <div className={footer.yellowInstagram}>
              <Image src={yellowInstagramIcon} alt="yellowInstagram-icon" />
            </div>
          </div>
        </div>

        {/* linea blanca */}
        <div className={footer.lineaBlanca}></div>
        {/* texto final */}
        <div className={footer.textoFinal}>
          <p>
            William Leonardo Gil Casallas Website - © 2022 by{' '}
            {/* eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href="https://virtel.co" target="_blank">
              Virtel
            </a>
          </p>
        </div>
      </div>

      {/* DESK */}
      <div className={footer.containerDeskFooter}>
        <div className={footer.containerDeskSuperior}>
          {/* Columna uno */}
          <div className={footer.columUno}>
            <div className={footer.logoDeskFooter}>
              <Image src={logoMobile} alt="logo" />
            </div>
            <p className={footer.columUnoDescription}>
              Este es un sitio web informativo sobre los servicios ofrecidos por
              el Abogado Penalista William Leonardo Gil Casallas
            </p>
            {/* iconos desk */}
            <div className={footer.groupSocialDesk}>
              <div className={footer.yellowFaceDesk}>
                <Image src={yellowFaceIcon} alt="yellowface-icon" />
              </div>
              <div className={footer.yellowTwitterDesk}>
                <Image src={yellowTwitterIcon} alt="yellowTwitter-icon" />
              </div>
              <div className={footer.yellowYoutubeDesk}>
                <Image src={yellowYoutubeIcon} alt="yellowYoutube-icon" />
              </div>
              <div className={footer.yellowLinkedinDesk}>
                <Image src={yellowLinkedinIcon} alt="yellowLinkedin-icon" />
              </div>
              <div className={footer.yellowInstagramDesk}>
                <Image src={yellowInstagramIcon} alt="yellowInstagram-icon" />
              </div>
            </div>
          </div>
          {/* columna dos */}
          <div className={footer.columnaDos}>
            <h3 className={footer.columDosTtitle}>Enlaces</h3>
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
          {/* columna tres */}
          <div className={footer.columnaTres}>
            <h3 className={footer.columTresTtitle}>Servicios</h3>
            <ul>
              <li>Defensas Penales</li>
              <li>Representación de Victimas</li>
              <li>Elaboración de Denuncias </li>
              <li>Elaboración de Conceptos</li>
              <li>Asesoría y Acompañamiento </li>
              <li>Casación y Revisión Penal</li>
            </ul>
          </div>
          {/* columna cuatro */}
          <div className={footer.columnaCuatro}>
            <h3 className={footer.columCuatroTtitle}>Mantengamos contacto</h3>
            <div className={footer.direcctionFooterDesk}>
              <Image src={iconDirection} alt="direction-footer" />
              <p>
                CALLE 12 B No 9 - 13 OFICINAS <br /> 414 - 415 EDIFICIO FLORIAN
              </p>
            </div>
            <div className={footer.telefonoFooterDesk}>
              <Image src={iconTelefono} alt="telefono-footer" />
              <p>300-562 90 15</p>
            </div>

            <div className={footer.MailFooterDesk}>
              <Image src={iconMail} alt="Mail-footer" />
              <p>
                <a href="mailto:leonard6902001@yahoo.com">
                  leonard6902001@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* linea blanca desk */}
        <div className={footer.lineaBlanca}></div>
        {/* texto final desk */}
        <div className={footer.textoFinalDesk}>
          <p>
            William Leonardo Gil Casallas Website - © 2022 by{' '}
            {/* eslint-disable-next-line react/jsx-no-target-blank*/}
            <a href="https://virtel.co" target="_blank">
              Virtel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
