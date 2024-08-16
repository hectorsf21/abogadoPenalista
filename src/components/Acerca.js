import React from "react";
import acerca from "../styles/acerca.module.css";
import Image from "next/image";
import iconEmail from "../img/icon-email.png";
import perfilMobileAcercaDe from "../img/perfil-mobile-acercaDe.png";
import firma from "../img/firma.png";
import perfilDeskAcercaDe from "../img/perfil-desk-acerca.png";

export default function Acerca() {
  return (
    <section id="acerca">
      <div className="container">
        <div className={acerca.contenedor}>
          <div className="row mx-auto mb-5">
            <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
              <div className={acerca.textoColUno}>
                <h3 className="subtitle">Acerca de mi</h3>
                <div>
                  <h1>Más de 10 años de experiencia como abogado penalista</h1>
                </div>
                <div>
                  <p>
                    Abogado especialista en Derecho Penal y Criminología
                    <br /> Magister en Derecho Penal (c) de la Universidad
                    Libre.
                    <br />
                    <br /> Profesional del derecho, con gran vocación y
                    dedicación por el Derecho Penal, desde hace más de 10 años
                    en Bogotá y a nivel nacional, específicamente dedicados
                    mente a la defensa penal y la representación de víctimas y
                    el derecho penal preventivo.
                    <br />
                    Como abogado penalista y litigante, he prestado asistencia y
                    representación judicial ido a mis clientes, dentro de los
                    lineamientos establecidos por la constitución política de
                    Colombia y el derecho penal, con énfasis en el manejo del
                    SPOA (Sistema Penal Oral Acusatorio), ante las diferentes
                    instancias judiciales a nivel local y nacional (Fiscalías,
                    Juzgados, Tribunales y Altas Cortes).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
              <div className={acerca.squares}>
                <div>
                  <h3>¿Deseas Solicitar una cita?</h3>
                </div>
                <div>
                  <p>
                    Estoy disponible las 24 horas del día los 365 días del año.
                    Puedes contáctarme cuando gustes y te responderé a la
                    brevedad posible
                  </p>
                </div>
                <div className={acerca.buttonContact}>
                  <a href="#contactanos">
                    <button>
                      <span className={acerca.iconEmail}>
                        <Image src={iconEmail} alt="email" />
                      </span>
                      <span className={acerca.texto}>Contáctame</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE ACERCA DE */}

      <div className={acerca.nuestoClientMobile}>
        <div className="container">
          <div className={acerca.perfilMobile}>
            <div className={acerca.perfilImageMobile}>
              <Image src={perfilMobileAcercaDe} alt="perfil-mobile-acercaDe" />
            </div>
            <div className={acerca.perfilTextoMobile}>
              <h6>
                El cliente y su requerimiento, razón suficiente para brindar
                nuestro acompañamiento jurídico
              </h6>
            </div>
          </div>
          <div className={acerca.nuestoClienteMobileTexto}>
            <p>
              Nuestros clientes son tratados con amabilidad y transparencia, por
              tal sus causas son manejadas con total compromiso, honestidad,
              responsabilidad y dedicación.
            </p>
            <p>
              Consúltenos, contamos con las herramientas tecnológicas y los
              recursos técnicos, igualmente con la experiencia profesional y el
              equipo científico necesario para ejecutar de la mejor manera el
              encargo encomendado.
            </p>
          </div>
          <div className={acerca.nuestoClienteMobileFirma}>
            <Image src={firma} alt="firma" />
            <p>William Leonardo Gil Casallas</p>
          </div>
        </div>
      </div>
      {/* DESK ACERCA DE */}
      <div className={acerca.nuestoClientDesk}>
        <div className={acerca.tarjetaAcercaDesk}>
          <div className={acerca.imageAcercaDesk}>
            <Image src={perfilDeskAcercaDe} alt="perfil-desk-acerca" />
          </div>
          <div className={acerca.texoAcercaDesk}>
            <h1>
              El cliente y su requerimiento, razón suficiente para brindar
              nuestro acompañamiento jurídico
            </h1>
            <br />
            <br />
            <p>Nuestros clientes son tratados con amabilidad y
              transparencia, por tal sus causas son manejadas con total
              compromiso, honestidad, responsabilidad y dedicación.
              <br />
              <br /> Consúltenos, contamos con las herramientas tecnológicas y
              los recursos técnicos, igualmente con la experiencia profesional y
              el equipo científico necesario para ejecutar de la mejor manera el
              encargo encomendado.
            </p>
            <div className={acerca.firmaDesk}>
              <Image src={firma} alt="firma" />
            </div>
            <p>William Leonardo Gil Casallas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
