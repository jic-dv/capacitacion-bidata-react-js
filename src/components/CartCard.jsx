import { formatCLP } from "../utils/formatCLP";

const CartCard = ({ item }) => {
  return (
    <article className="card">
      <header className="card__header">
        <h4 className="card__title">{item.product}</h4>
        <span className="card__subtitle">{item.model}</span>
      </header>

      <div className="card__body">
        <div className="card__row">
          <span className="card__label">ID</span>
          <span className="card__value">{item.id}</span>
        </div>

        <div className="card__row">
          <span className="card__label">Precio</span>
          <span className="card__value">{formatCLP(item.price)}</span>
        </div>
      </div>

      <footer className="card__footer">
        <button className="card__btn" type="button">
          Ver detalle
        </button>
        <button className="card__btn card__btn--primary" type="button">
          Comprar
        </button>
      </footer>
    </article>
  );
};

export default CartCard;
