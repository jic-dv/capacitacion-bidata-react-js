import { useEffect, useState } from "react";

/**
 * Requisitos (Vite):
 * 1) .env
 *    VITE_API_URL=https://api-dev.procanje.app
 *    VITE_API_KEY=apikey
 *
 * Este componente es didáctico:
 * - 3 estados: data, loading, error
 * - fetch con header X-API-KEY
 * - paginación simple con meta (page, totalPages)
 */

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const LIMIT = 10;

const PropertiesFetch = () => {
  const [properties, setProperties] = useState([]);
  const [meta, setMeta] = useState(null); // meta para paginar

  const [page, setPage] = useState(1); // página actual
  const [loading, setLoading] = useState(false); // loading
  const [error, setError] = useState(""); // error

  useEffect(() => {
    const controller = new AbortController();

    const getProperties = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/properties-portal?limit=${LIMIT}&page=${page}`,
          {
            method: "GET",
            headers: {
              accept: "*/*",
              "X-API-KEY": API_KEY,
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error HTTP ${response.status} - ${response.statusText}`
          );
        }

        const json = await response.json();

        setProperties(json.data || []);
        setMeta(json.meta || null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Ocurrió un error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    getProperties();

    return () => controller.abort();
  }, [page]);

  const totalPages = meta?.totalPages ?? 1;
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section className="properties-demo">
      <h2 className="properties-demo__title">Listado de Propiedades</h2>
      <p className="properties-demo__subtitle">
        Ejemplo de <b>fetch</b> + header <b>X-API-KEY</b> con paginación.
      </p>

      {loading && (
        <div className="properties-demo__state properties-demo__state--loading">
          Cargando...
        </div>
      )}

      {error && (
        <div className="properties-demo__state properties-demo__state--error">
          {error}
        </div>
      )}

      {!loading && !error && properties.length === 0 && (
        <div className="properties-demo__state">No hay datos para mostrar.</div>
      )}

      <div className="properties-grid">
        {properties.map((p) => {
          const image = p?.images?.[0]?.path;

          return (
            <article key={p.id} className="property-card">
              <div className="property-card__media">
                {image ? (
                  <img
                    className="property-card__img"
                    src={image}
                    alt={p.propertyTitle}
                    loading="lazy"
                  />
                ) : (
                  <div className="property-card__placeholder">Sin imagen</div>
                )}

                {p.isExchanged && (
                  <span className="property-card__badge">En canje</span>
                )}
              </div>

              <div className="property-card__content">
                <h3 className="property-card__title">{p.propertyTitle}</h3>

                <div className="property-card__meta">
                  <span className="property-card__pill">
                    {p.typeOfOperationId}
                  </span>
                  <span className="property-card__pill">
                    {p.typeOfPropertyId}
                  </span>
                </div>

                <div className="property-card__location">
                  {p?.address?.city?.name ?? "Sin ciudad"} ·{" "}
                  {p?.address?.state?.name ?? "Sin región"}
                </div>

                <div className="property-card__price-row">
                  <span className="property-card__price">
                    {p.currencyId} {p.propertyPrice}
                  </span>

                  <a
                    className="property-card__link"
                    href={p.externalLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Paginación al final */}
      <div className="properties-demo__toolbar" style={{ marginTop: 16 }}>
        <div className="properties-demo__pager">
          <button
            className="btn"
            onClick={goPrev}
            disabled={loading || !hasPrev}
          >
            Volver
          </button>

          <span className="properties-demo__page-info">
            Página <b>{page}</b> de <b>{totalPages}</b>
          </span>

          <button
            className="btn btn--primary"
            onClick={goNext}
            disabled={loading || !hasNext}
          >
            Siguiente
          </button>
        </div>

        <span className="properties-demo__meta">
          Total: {meta?.totalItems ?? "-"} · Límite: {meta?.limit ?? LIMIT}
        </span>
      </div>
    </section>
  );
};

export default PropertiesFetch;
