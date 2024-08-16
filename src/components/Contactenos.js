import React from 'react';
import Image from 'next/image';
import iconCelContacto from '../img/icon-cel-contacto.png';
import iconMailContacto from '../img/icon-mail-contacto.png';
import iconDirecContacto from '../img/icon-direc-contacto.png';
import mapaDesk from '../img/mapadesk.png';
import mapaMobile from '../img/mapamobile.png';
import contacto from '../styles/contacto.module.css';

export default function Contactenos() {
  return (
    <section id="contactanos">
      <div className="container">
        <div className={contacto.containerMobile} id="contactenosMobile">
          <div className={contacto.title}>
            <h2>Contáctenos</h2>
            <p>
              Estamos a la orden para resolver tus dudas puedes contactarme y
              podemos agendar una cita para conversar sobre tu caso. Atendemos
              su caso a nivel Nacional.
            </p>
          </div>

          {/* cuadro */}
          <div className={contacto.cuadroContacto}>
            {/* telefono */}
            <div className={contacto.telefono}>
              <div className={contacto.imageTelefono}>
                <Image src={iconCelContacto} alt="iconCelContacto" />
              </div>
              <div className={contacto.textoTelefono}>
                <p>Teléfono / Whatsapp</p>
                <p>300-562 90 15</p>
              </div>
            </div>
            {/* mail */}
            <div className={contacto.Mail}>
              <div className={contacto.imageMail}>
                <Image src={iconMailContacto} alt="iconMailContacto" />
              </div>
              <div className={contacto.textoMail}>
                <p>Email</p>
                <p>leonard6902001@yahoo.com</p>
              </div>
            </div>
            {/* direction */}
            <div className={contacto.direction}>
              <div className={contacto.imageDire}>
                <Image src={iconDirecContacto} alt="iconDirecContacto" />
              </div>
              <div className={contacto.textodirection}>
                <p>Dirección</p>
                <p>
                  CALLE 12 B No 9 <br />
                  13 OFICINAS 414 <br />
                  415 EDIFICIO FLORIAN BOGOTÁ, COLOMBIA
                </p>
              </div>
            </div>
          </div>
          {/* MAPA Mobile */}
          <div className={contacto.mapaMobileServicios}>
            <Image src={mapaMobile} alt="mapa ubicacion" />
          </div>
          {/* FORMULARIO */}
          <div className={contacto.formulario}>
            <div className={contacto.titleFormulario}>
              <h2>Escríbenos un mensaje</h2>
            </div>
            <form>
              {/* nombre */}
              <div className={contacto.inputNombre}>
                <label htmlFor="nombre">Nombre Completo</label>
                <br />
                <input type="texto" name="nombre" id="nombre" />
              </div>
              {/* email */}
              <div className={contacto.inputEmail}>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" id="email" />
              </div>
              {/* telefono */}
              <div className={contacto.inputTelefono}>
                <label htmlFor="telefono">Numero de Teléfono</label>
                <br />
                <input type="texto" name="telefono" id="telefono" />
              </div>
              {/* Empresa */}
              <div className={contacto.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <br />
                <input type="texto" name="empresa" id="empresa" />
              </div>
              {/* Mensaje */}
              <div className={contacto.inputMensaje}>
                <label htmlFor="Mensaje">Mensaje</label>
                <br />
                <textarea id="mensaje" type="texto"></textarea>
              </div>
              <div className={contacto.botonformMobile}>
                <button>ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* DESK */}
      <div className={contacto.containerDesk} id="contactenosDesk">
        <div className="container">
          <div className={contacto.titleDesk}>
            <h2>Contáctenos</h2>
            <p>
              Estamos a la orden para resolver tus dudas puedes contactarme y
              podemos agendar una cita para conversar sobre tu caso. Atendemos
              su caso a nivel Nacional.
            </p>
          </div>
          {/* cuadro */}
          <div className={contacto.cuadroContactoDesk}>
            {/* telefono */}
            <div className={contacto.telefonoDesk}>
              <div className={contacto.imageTelefonoDesk}>
                <Image src={iconCelContacto} alt="iconCelContacto" />
              </div>
              <div className={contacto.textoTelefonoDesk}>
                <p>Teléfono / Whatsapp</p>
                <p>300-562 90 15</p>
              </div>
            </div>
            {/* mail */}
            <div className={contacto.MailDesk}>
              <div className={contacto.imageMailDesk}>
                <Image src={iconMailContacto} alt="iconMailContacto" />
              </div>
              <div className={contacto.textoMailDesk}>
                <p>Email</p>
                <p>leonard6902001@yahoo.com</p>
              </div>
            </div>
            {/* direction */}
            <div className={contacto.directionDesk}>
              <div className={contacto.imageDireDesk}>
                <Image src={iconDirecContacto} alt="iconDirecContacto" />
              </div>
              <div className={contacto.textodirectionDesk}>
                <p>Dirección</p>
                <p>CALLE 12 B No 9 13 OFICINAS 414 415 EDIFICIO FLORIAN BOGOTÁ, COLOMBIA</p>
              </div>
            </div>
          </div>
          {/* MAPA DESK */}
          <div className={contacto.mapaDeskServicios}>
            <Image src={mapaDesk} alt="direccion oficina" />
            {/* form desk */}
            <div className={contacto.formDeskServicios}>
              <form>
                <div className="container">
                  <h1>Escríbenos un mensaje</h1>
                  <div className="row">
                    <div className="col-6 mb-4">
                      <label htmlFor="nombre">Nombre Completo</label>
                      <br />
                      <input type="texto" name="nombre" id="nombre" />
                    </div>
                    <div className="col-6 mb-4">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 mb-4">
                      <label htmlFor="telefono">Nombre de Teléfono</label>
                      <br />
                      <input type="texto" name="telefono" id="telefono" />
                    </div>
                    <div className="col-6 mb-4">
                      <label htmlFor="empresa">Empresa</label>
                      <br />
                      <input type="texto" name="empresa" id="empresa" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label>Mensaje</label>
                      <br />
                      <textarea></textarea>
                    </div>
                    <div className="col-12">
                      <button>SEND</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
