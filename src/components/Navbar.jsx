import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const items = [
  { name: "Inicio", link: "#intro-section" },
  { name: "Sobre Nosotros", link: "#about-medusa-section" },
  { name: "Proyectos", link: "#projects-section" },
  { name: "Servicios", link: "#services-section" },
  { name: "FAQ", link: "#faq-section" },
  { name: "Contacto", link: "#" },
];

const MenuItems = ({ items, isHomepage }) => {
  const handleClick = (id) => {
    if (isHomepage) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else {
      localStorage.setItem("sectionId", id);
      window.location.href = `/`;
    }
  };

  return (
    <ul className="flex flex-col justify-between gap-y-6 tablet:flex-row tablet:gap-x-2 desktop:gap-x-8">
      {items.map((item) => (
        <li
          key={item.name}
          onClick={() => handleClick(item.link)}
          className="hover:font-w-bold hover:cursor-pointer hover:text-var-dark-blue">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = ({ isHomepage }) => (
  <nav className="flex flex-col items-center fixed top-0 left-0 w-screen mt-16 py-4 px-5 gap-6 text-2xl bg-white text-var-dark-blue group">
    <div className="w-fu</div>ll group-open:animate-fadeIn">
      <MenuItems items={items} isHomepage={isHomepage} />
    </div>
    <div className="flex flex-col gap-3 w-full group-open:animate-fadeIn">
      <Button type="white" content="Iniciar Sesión" />
      <Button type="dark-blue" content="Registrate" />
    </div>
  </nav>
);

const Navbar = ({ isHomepage }) => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!MobileMenuOpen);
  };

  useEffect(() => {
    window.onload = () => {
      const sectionId = localStorage.getItem("sectionId");
      if (sectionId) {
        setTimeout(() => {
          document
            .querySelector(sectionId)
            .scrollIntoView({ behavior: "smooth" });
          localStorage.removeItem("sectionId");
        }, 100);
      }
    };
  }, []);

  return (
    <header className="h-16 px-6 py-4 w-full flex items-center justify-between fixed top-0 bg-white z-50 select-none tablet:px-10 tablet:h-20 laptop:px-16 laptop:text-lg">
      <figure className="h-11 hover:cursor-pointer tablet:hidden">
        <img
          src="/assets/icons/hamburguer.webp"
          alt="logo"
          className="h-full"
          onClick={handleMobileMenuOpen}
        />
      </figure>

      <figure className="flex-shrink-0 h-10 laptop:h-11 desktop:h-14">
        <Link to="/">
          <img
            src="/assets/logo/medusa-azul-sin-fondo.webp"
            alt="logo"
            className="h-full w-full"
          />
        </Link>
      </figure>

      <nav className="hidden tablet:flex tablet:justify-between tablet:items-center">
        <MenuItems items={items} isHomepage={isHomepage} />
      </nav>

      {MobileMenuOpen && <MobileMenu />}

      <div className="hidden tablet:flex tablet:gap-3">
        <Button
          type="white"
          content="Iniciar Sesión"
          styles="tablet:px-2 desktop:px-5"
        />
        <Button
          type="dark-blue"
          content="Registrate"
          styles="tablet:px-2 desktop:px-5"
        />
      </div>
    </header>
  );
};

export default Navbar;
