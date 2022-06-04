import React from "react";
import Swal from "sweetalert2";

import Footer from "../components/Footer";

import "sweetalert2/src/sweetalert2.scss";
import Navbar from "./../components/Navbar";
/*se repetía el home por eso quite el router*/
/*agregar footer aqui*/
const App: React.FC = () => {
  Swal.fire(
    "¡Atención!",
    "Este sitio fue creado con fines educativos no es oficial de Mercado Libre, puedes utilizar el repositorio libremente abajo encontrarás mis redes, gracias.",
    "warning",
  );

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
