const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Logo del corredor / inmobiliaria */}
      <div>
        <a href="/">
          <img
            src="/images/logo.png"
            className="logo"
            alt="Logo corredor de propiedades"
          />
        </a>
      </div>

      {/* Enlaces principales */}
      <div>
        <ul className="list">
          <li>
            <a href="#inicio">Inicio</a>
          </li>

          <li>
            <a href="#nosotros">Nosotros</a>
          </li>

          <li>
            <a href="#servicios">Servicios</a>
          </li>

          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>

      {/* Acciones */}
      <div>
        <button>Publicar propiedad</button>
        <button>Mi cuenta</button>
      </div>
    </nav>
  );
};

export default Navigation;
