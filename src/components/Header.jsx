import Button from "./Button";

function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <figure className="h-9">
        <img
          src="/assets/logo/medusa-azul-sin-fondo.webp"
          alt="logo"
          className="h-full"
        />
      </figure>

      <nav className="flex justify-between items-center">
        <ul className="flex gap-x-8">
          <li>Inicio</li>
          <li>Sobre Nosotros</li>
          <li>Proyectos</li>
          <li>Servicios</li>
          <li>FAQ</li>
          <li>Contactos</li>
        </ul>
      </nav>

      <div className="flex gap-x-3">
        <Button type="white" content="Iniciar Sesión" />
        <Button type="dark-blue" content="Registrate" />
      </div>
    </header>
  );
}

export default Header;
