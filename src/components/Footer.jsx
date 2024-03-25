import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center select-none bg-center bg-cover bg-[url('/assets/backgrounds/dark-sky.webp')] text-white tablet:h-80">
      <div className="flex flex-col w-full px-[25px] pt-20 pb-[25px] gap-8 justify-between items-start tablet:flex-row tablet:px-8 tablet:w-fit tablet:pb-20 tablet:items-center laptop:px-16">
        <figure className="h-10 tablet:h-11 desktop:h-14">
          <img
            src="/assets/logo/medusa-blanco-sin-fondo.webp"
            alt="Logo Medusa"
            className="h-full"
          />
        </figure>
        <nav className="flex space-x-4">
          <ul className="flex flex-col text-left gap-[23px] phone:gap-x-6 tablet:flex-row tablet:text-center tablet:gap-x-8">
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Proyectos</li>
            <li>Servicios</li>
            <li>FAQ</li>
            <li>Contactos</li>
          </ul>
        </nav>
        <div className="flex gap-2 justify-center items-center">
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

      <hr className="w-full border-t-[0.2px] border-opacity-80 border-white" />

      <div className="flex flex-col justify-center items-center gap-6 my-9 tablet:flex-row tablet:my-[43.5px]">
        <p>© 2023 Medusa. All rights reserved.</p>
        <div className="flex justify-center items-center gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
