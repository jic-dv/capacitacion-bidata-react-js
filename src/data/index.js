const emptyCart = [];

const sizes = ["s", "m", "l", "xl", "xxl"];

const points = [1, 3, 5, 6, 7, 6];

const status = [true, true, false];

const objeto = {};

const cart = [
  {
    id: "_9dfnsf2f37b653",
    product: "IPhone",
    model: "17 Pro Max",
    price: 1800000,
  },
  {
    id: "_6df2223437b23",
    product: "Samsung",
    model: "S21",
    price: 1250000,
  },
  {
    id: "_12456437b23",
    product: "Sony",
    model: "1000xm4",
    price: 200000,
  },
];

const arrayArrays = [[], [], []];

const navigationData = [
  { id: 1, text: "Inicio", path: "/" },
  { id: 2, text: "Servicios", path: "#servicios" },
  { id: 3, text: "Propiedades", path: "#propiedades" },
  { id: 4, text: "Nosotros", path: "#nosotros" },
];

const properties = [
  {
    _id: "_3ni483h872332",
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
  },
  {
    _id: "_3ni43526773",
    title: "Departamento ubicado en La Serena frente al Mar",
    description: "Sector tranquilo con seguridad y portero electrico",
    typeOfOperation: "Arriendo",
    typeOfProperty: "Departamento",
    propertyPrice: 380000,
    currency: "CLP",
    characteristics: {
      bathrooms: 1,
      bedrooms: 2,
      parkingLots: 1,
      surface: 50,
      isNew: true,
    },
    address: {
      country: {
        id: 1,
        name: "Chile",
      },
      city: {
        id: 14,
        name: "Coquimbo",
      },
      comune: {
        id: 15,
        name: "La Serena",
      },
      coordinates: {
        lat: -232143634,
        lng: -635345334,
      },
    },
    images: [
      "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407108111575.webp",
      "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407103424075.webp",
      "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200204/1414670/2020020407103424075.webp",
    ],
  },
];

export { cart, navigationData, properties };
