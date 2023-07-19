import NavBar from "../../common/navBar/NavBar";
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks";
import { useState } from "react";

export const Home = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <NavBar />
      <PruebasHooks contador={contador} setContador={setContador} />
    </>
  );
};
