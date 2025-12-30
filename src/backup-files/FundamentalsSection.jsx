// ========== FUNDAMENTALS ==========
// Tipos de datos en JavaScript

/**
 *   string -> "" | "Text" | '' | `${variable}`
 *   number -> -1 | 1.490
 *   boolean -> true | false
 *   object -> {}
 *   array -> [] ⚠️
 *   undefined -> variable not initialized
 *   null -> empty value
 *
 */

// Strings
const messageSuccess = "Usuario Creado exitosamente!";
const messageError = "Error al obtener los datos del usuario...";
const loadingMessage = `Cargando datos del usuario`;
const statusCode = 400;
const notFoundMessage = `Error ${statusCode} - Web no encontrada`;
const notFoundMessageOld = "Error " + statusCode + " - Web no encontrada";

// Numbers
const pi = 3.14;
const price = 390000;

// Booleans
const isUserAuthorized = true;
const isCreatedUser = false;

// object
const propiedad = {
  title: "Hermosa Casa ubicada en Huechuraba, Condominio Piedra Roja",
  description:
    "Casa en sector tranquilo comuna de Huechuraba, con seguridad portero electrico...",
  typeOfOperation: "Venta",
  typeOfProperty: "Casa",
  propertyPrice: 180000000,
  currency: "CLP",
  characteristics: {
    bathrooms: 2,
    bedrooms: 3,
    parkingLots: 1,
    surface: 290,
    isNew: true,
  },
  address: {
    country: {
      id: 1,
      name: "Chile",
    },
    city: {
      id: 14,
      name: "Metropolitana de Santiago",
    },
    comune: {
      id: 15,
      name: "Huechuraba",
    },
    coordinates: {
      lat: -123213213,
      lng: -125919823,
    },
  },
  images: [
    "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407096705325.webp",
    "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407108111575.webp",
    "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407103424075.webp",
  ],
};

const {
  title,
  typeOfOperation,
  typeOfProperty,
  propertyPrice,
  currency,
  characteristics: { bathrooms, bedrooms, surface },
} = propiedad;

// Array
const properties = [];

// Undefined
let user = { name: "Juanito" };

function getUser() {
  return "Hola";
}

// console.log(user);

const getUserAF = () => {
  return { ...user, age: 19, height: 1.8 };
};

// console.log("user", user);
// console.log("fn1", getUser());
// console.log("fn2", getUserAF());

// null
const sessionUserData = { name: "Cristian", lastName: "Arevalo" };

console.log(sessionUserData.age);

// ========== END FUNDAMENTALS ==========

const FundamentalsSection = () => {
  return (
    <div>
      <h1>Fundamentos de JS</h1>

      <div>
        <h2>Strings</h2>{" "}
        <p>
          <strong>String:</strong> {messageSuccess}
        </p>
        <br />
        <p>
          <strong>Tempalte String:</strong> {notFoundMessage}
        </p>
        <br />
        <p>
          <strong>Concat old:</strong> {notFoundMessageOld}
        </p>
      </div>

      <div>
        <h2>INTEGERS</h2>{" "}
        <p>
          <strong>Integer decimal:</strong> {pi}
        </p>
        <br />
        <p>
          <strong>Integer:</strong> {price}
        </p>
      </div>

      {/* SECCION BOOLEANOS */}
      <div>
        <h2>BOOLEAN</h2>{" "}
        <p>
          <strong>Output True:</strong>{" "}
          {isUserAuthorized ? "USUARIO AUTORIZADO" : "NO AUTORIZADO"}
        </p>
        <br />
        <p>
          <strong>Output False:</strong>{" "}
          {isCreatedUser ? <span>Usuario creado</span> : <a>Ir a Login</a>}
        </p>
      </div>

      {/* SECCION OBJETOS */}

      <div>
        <div>
          <img />
        </div>

        <div>
          <h3>{title}</h3>
          <span>{typeOfOperation}</span> <span>{typeOfProperty}</span>
          <p>
            {" "}
            {currency} - {propertyPrice}
          </p>
          <div>
            <span>Banos: {bathrooms}</span> <span>Dorms: {bedrooms}</span>{" "}
            <span>M2: {surface}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalsSection;
