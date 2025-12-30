import { formatCLP } from "../utils/formatCLP";

const PropertyCard = ({ item }) => {
  const mainImage = item.images[0];

  return (
    <article className="property-card">
      <div className="property-card__media">
        <img
          className="property-card__img"
          src={mainImage}
          alt={item.title}
          loading="lazy"
        />
        {item.characteristics.isNew && (
          <span className="property-card__badge">{"Nuevo"}</span>
        )}
      </div>

      <div className="property-card__content">
        <div className="property-card__meta">
          <span className="property-card__tag">{item.typeOfOperation}</span>
          <span className="property-card__tag">{item.typeOfProperty}</span>
        </div>

        <h3 className="property-card__title">{item.title}</h3>
        <p className="property-card__desc">{item.description}</p>

        <ul className="property-card__features">
          <li>{item.characteristics?.bedrooms} dorm.</li>
          <li>{item.characteristics?.bathrooms} baños</li>
          <li>{item.characteristics?.parkingLots} estac.</li>
          <li>{item.characteristics?.surface} m²</li>
        </ul>

        <div className="property-card__footer">
          <div className="property-card__location">
            {item.address?.comune?.name}, {item.address?.city?.name}
          </div>
          <div className="property-card__price">
            {formatCLP(item.propertyPrice)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
