import React from "react";
import header from "../styles/header.module.css";
import Image from "next/image";
import perfil from "../img/perfil.png";
import flecha from "../img/flecha.png";

export default function Header() {
  return (
    <div>
      {/* MOBILE */}
      <div className={header.containerMobile} id="inicioMobile">
        <div className={header.headerMobile}>
          <div className={`container ${header.headerMobileContainer}`}>
            <div className={header.texto}>
              <h3 className="header-subtitle">Abogado Penalista</h3>
              <h1>Amplia Trayectoria</h1>
              <h4>Especialista en defensa penal y Criminología</h4>
            </div>
            <div className={header.image}>
              <Image src={perfil} alt="Abogado Leonardo Gil" />
            </div>
          </div>
        </div>

        <div className={`container ${header.section}`}>
          <div className={header.parrafo}>
            <p>
              Nuestra atención se enfoca puntualmente en el litigio, asesoría y
              consultoría en el campo del derecho penal. Asistimos a personas
              naturales y jurídicas en cada fase del proceso penal,
              representamos sus intereses, ya sea como investigado o en calidad
              de víctima, dentro de los parámetros legales y judiciales,
              proporcionando las mejores opciones, tendientes a su mayor
              beneficio.
            </p>
          </div>
          <div className={header.buttonMas}>
            <a href="#acerca" className={header.button}>
              <span>Leer más</span>
              <Image src={flecha} alt="flecha" />
            </a>
          </div>
          <div className={header.numero}>
            <div>
              <h3>+50</h3>
              <h3>Casos</h3>
              <h3>Resueltos</h3>
            </div>
            <div>
              <h3>+10</h3>
              <h3>Años de</h3>
              <h3>Experiencia</h3>
            </div>
            <div>
              <h3>+100</h3>
              <h3>Clientes</h3>
              <h3>Satisfecho</h3>
            </div>
          </div>
        </div>
      </div>
      {/* DESK */}
      <div className="container">
        <div className={header.containerDesk} id="inicioDesk">
          <div className={header.headerDesk}>
            <div className={header.textoDesk}>
              <h3 className="header-subtitle">Abogado Penalista</h3>
              <h1>Amplia Trayectoria</h1>
              <h4>Especialista en defensa penal y Criminología</h4>
              <div className={header.parrafoDesk}>
                <p>
                  Nuestra atención se enfoca puntualmente en el litigio,
                  asesoría y consultoría en el campo del derecho penal.
                  Asistimos a personas naturales y jurídicas en cada fase del
                  proceso penal, representamos sus intereses, ya sea como
                  investigado o en calidad de víctima, dentro de los parámetros
                  legales y judiciales, proporcionando las mejores opciones,
                  tendientes a su mayor beneficio.
                </p>
              </div>
              <div className={header.buttonMasDesk}>
                <button>
                  <span className={header.text}>Leer Más</span>
                  <span className={header.flecha}>
                    <Image src={flecha} alt="flecha" />
                  </span>
                </button>
              </div>
              <div className={header.numeroDesk}>
                <div className={header.firstNumber}>
                  <div className={header.first}>+50</div>
                  <div className={header.second}>
                    <p>Casos</p>
                    <p>Resueltos</p>
                  </div>
                </div>
                <div className={header.firstNumber}>
                  <div className={header.first}>+10</div>
                  <div className={header.second}>
                    <p>Años</p>
                    <p>Experiencia</p>
                  </div>
                </div>
                <div className={header.firstNumber}>
                  <div className={header.first}>+100</div>
                  <div className={header.second}>
                    <p>Clientes</p>
                    <p>Satisfecho</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={header.imageDesk}>
              <Image src={perfil} alt="Abogado Leonardo Gil" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
