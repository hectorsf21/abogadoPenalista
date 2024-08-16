import React from 'react';
import Image from 'next/image';
import dPenalesIcon from '../img/icon-def-penales.png';
import iconVictima from '../img/icon-victimas.png';
import iconMaletin from '../img/icon-maletin.png';
import iconVista from '../img/icon-vista.png';
import services from '../styles/services.module.css';
import ModalWindow from './ModalWindow/ModalWindow';

export default function Servicios() {
  return (
    <section className={services.container} id="servicios">
      <div className="container d-flex flex-column justify-content-center">
        <div className={services.titleServices}>
          <h3>Servicios</h3>
          <h1>Estos son los servicios en los que te podemos ayudar</h1>
        </div>
        {/* FILA MOBILE y DESK */}
        <div className="row">
          {/* cuadro uno */}

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className={services.box}>
              <div className={services.icons}>
                <Image src={dPenalesIcon} alt="icon-services-dpenales" />
              </div>

              <h5>Derecho Penal</h5>
              <p className={services.textSquare}>
                Gracias a nuestra amplia experiencia en el litigio penal
                brindamos asesoría,
                <a>
                  {/* <ModalWindow labelButton="ver más...">
                    <div className={services.iconsModal}>
                      <Image src={dPenalesIcon} alt="icon-services-dpenales" />
                    </div>
                    <p>
                      Gracias a nuestra amplia experiencia en el litigio penal
                      brindamos asesoría y acompañamiento profesional en
                      procesos penales, en todas sus etapas, actuando como
                      defensa técnica, dentro de los diferentes delitos que
                      conforman la Ley 599 de 2000 (Código Penal), así como el
                      procedimiento contemplado en la Ley 906 de 2004 (Código de
                      procedimiento Penal), es decir, audiencias de imputación,
                      acusación, preparatoria y juicio oral. Representamos a
                      víctimas, por delitos contra ellos cometidos, desde la
                      presentación de la denuncia, con el consecuente desarrollo
                      de cada una de las audiencias que el proceso penal
                      comprende. Igualmente, y de ser necesario, el trámite de
                      los recursos, tanto en primera, como en segunda instancia.
                    </p>
                  </ModalWindow> */}
                </a>
              </p>
            </div>
          </div>
          {/* cuadro dos */}

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className={services.box}>
              <div className={services.icons}>
                <Image src={iconVictima} alt="icon-services-victimas" />
              </div>
              <h5>Derecho Disciplinario</h5>
              <p className={services.textSquare}>
                Suministramos asesoría y asumimos la defensa en investigaciones
                <a>
                  {/* <ModalWindow labelButton="ver más...">
                    <div className={services.iconsModal}>
                      <Image src={iconVictima} alt="icon-services-victimas" />
                    </div>
                    <p>
                      Suministramos asesoría y asumimos la defensa en
                      investigaciones adelantadas por la Procuraduría General de
                      la Nación, la Comisión Nacional de Disciplina Judicial y
                      las distintas Oficinas de Control Interno Disciplinario de
                      las entidades nacionales.
                    </p>
                  </ModalWindow> */}
                </a>
              </p>
            </div>
          </div>
          {/* cuadro tres */}

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className={services.box}>
              <div className={services.icons}>
                <Image src={iconMaletin} alt="icon-services-maletin" />
              </div>

              <h5>Derecho Fiscal</h5>
              <p className={services.textSquare}>
                Brindamos asesoría y asumimos la defensa en procesos de
                Responsabilidad
                <a>
                  {/* <ModalWindow labelButton="ver más...">
                    <div className={services.iconsModal}>
                      <Image src={iconMaletin} alt="icon-services-maletin" />
                    </div>
                    <p>
                      Brindamos asesoría y asumimos la defensa en procesos de
                      Responsabilidad Fiscal adelantados por la Contraloría
                      General de la República, a través de sus distintas
                      dependencias
                    </p>
                  </ModalWindow> */}
                </a>
              </p>
            </div>
          </div>

          {/* cuadro cuatro */}

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className={services.box}>
              <div className={services.icons}>
                <Image src={iconVista} alt="icon-services-vista" />
              </div>

              <h5>Extinción de Dominio</h5>
              <p className={services.textSquare}>
                Ofrecemos asesoría legal en procesos de extinción de dominio,
                <a>
                  {/* <ModalWindow labelButton="ver más...">
                    <div className={services.iconsModal}>
                      <Image src={iconVista} alt="icon-services-vista" />
                    </div>
                    <p>
                      Ofrecemos asesoría legal en procesos de extinción de
                      dominio, velando por el cumplimiento de sus garantías y el
                      respeto por el derecho a la propiedad.
                    </p>
                  </ModalWindow> */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
