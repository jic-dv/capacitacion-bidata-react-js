// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";
// import AboutSection from "./components/sections/AboutSection";
// import ContactSection from "./components/sections/ContactSection";
import FundamentalsSection from "./components/sections/FundamentalsSection";
// import HeroSection from "./components/sections/HeroSection";
// import ServicesSection from "./components/sections/ServicesSection";

const App = () => {
  return (
    <div className="container">
      {/* <Header>
        <Navigation />
      </Header> */}

      {/* SECCIONES */}
      {/* COMPONENTE HERO */}
      <main>
        {/* COMPONENTE FUNDAMENTOS JavaScript y React.js */}
        <FundamentalsSection />

        {/* <HeroSection /> */}

        {/* COMPONENTE NOSOTROS */}
        {/* <AboutSection /> */}

        {/* COMPONENTE SERVICIOS */}
        {/* <ServicesSection /> */}

        {/* COMPONENTE FORMULARIO */}
        {/* <ContactSection /> */}
      </main>

      {/* COMPONENTE FOOTER */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
