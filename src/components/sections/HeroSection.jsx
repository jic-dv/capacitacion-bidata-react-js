const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          {/* Columna izquierda: contenido */}
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__dot" aria-hidden="true" />
              Plataforma para corredores y corretaje de propiedades
            </div>

            <h1 className="hero__title">
              Publica, gestiona y cierra negocios <strong>más rápido</strong>
            </h1>

            <p className="hero__subtitle">
              Centraliza tus propiedades, organiza tus clientes y convierte
              oportunidades en visitas agendadas. Un flujo simple, diseñado para
              el trabajo real del corredor inmobiliario.
            </p>

            <div className="hero__actions">
              <a className="hero__btn hero__btn--primary" href="#propiedades">
                Ver propiedades
                <ArrowIcon />
              </a>

              <a className="hero__btn hero__btn--secondary" href="#contacto">
                Hablar con un asesor
                <ChatIcon />
              </a>
            </div>

            <nav className="hero__social" aria-label="Redes sociales">
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>

          {/* Columna derecha: imagen */}
          <div
            className="hero__media"
            aria-label="Imagen de propiedad destacada"
          >
            <img
              className="hero__image"
              src="/images/hero.jpg"
              alt="Propiedad destacada para corretaje inmobiliario"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

/* Iconos simples sin librerías */
function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
