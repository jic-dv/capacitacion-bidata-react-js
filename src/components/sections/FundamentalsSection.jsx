import { cart, navigationData, properties } from "../../data/index";
import CartCard from "../CartCard";
import PropertyCard from "../PropertyCard";

const FundamentasSection = () => {
  return (
    <section className="fundamentas">
      <div className="fundamentas__container">
        <h2 className="fundamentas__title">Fundamentas Section</h2>
        <p className="fundamentas__subtitle">
          Ejemplo didáctico con arrays, objetos y render dinámico con React.
        </p>

        {/* 1) NAVEGACIÓN */}
        <section className="nav-section">
          <h3 className="nav-section__title">1) Navegación (navigationData)</h3>

          <nav className="navigation">
            <ul className="navigation__list">
              {navigationData.map((item) => (
                <li key={item.id} className="navigation__item">
                  <a className="navigation__link" href={item.path}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* 2) PROPIEDADES */}
        <section className="properties-section" id="propiedades">
          <h3 className="properties-section__title">
            2) Propiedades (properties)
          </h3>

          <div className="properties-grid">
            {properties.map((item) => (
              <PropertyCard key={item._id} item={item} />
            ))}
          </div>
        </section>

        {/* 3) CARRITO / CARDS */}
        <section className="cart-section">
          <h3 className="cart-section__title">3) Carrito (cart)</h3>

          <div className="cards-grid">
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FundamentasSection;
