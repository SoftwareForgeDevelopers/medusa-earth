import React from "react";

function Footer () {
  return (
    <footer className="h-80 items-center bg-center bg-cover bg-[url('/assets/backgrounds/dark-sky.webp')] text-white mt-36">
      <div className="px-16 py-20 container mx-auto flex justify-between items-center">
        <figure className="h-12 w-44">
          <img
            src="/assets/logo/medusa-blanco-sin-fondo.webp"
            alt="Logo Medusa"
            className="h-full"
          />
        </figure>
        <nav className="flex space-x-4">
          <ul className="flex gap-x-8">
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Proyectos</li>
            <li>Servicios</li>
            <li>FAQ</li>
            <li>Contactos</li>
          </ul>
        </nav>
        <div className="flex w-44 gap-2 justify-center items-center">
          <a
            href="https://www.instagram.com/medusa.earth/"
            target="_blank"
            rel="noopener noreferrer">
            <figure>
              <img
                src="/assets/icons/instagram.png"
                alt="Instagram"
                className="w-6"
              />
            </figure>
          </a>
          <a
            href="https://www.linkedin.com/company/medusa-energy/"
            target="_blank"
            rel="noopener noreferrer">
            <figure>
              <img
                src="/assets/icons/linkedin.png"
                alt="LinkedIn"
                className="w-6"
              />
            </figure>
          </a>
        </div>
      </div>
      <hr className="border-t-0.2 border-opacity-80 border-white" />
      <div className="flex justify-center items-center gap-6 my-43.5">
        <p>© 2023 Medusa. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </footer>
  );
};

export default Footer;
