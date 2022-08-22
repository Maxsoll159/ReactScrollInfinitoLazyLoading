//import { Componente1 } from './Componente1';

import { lazy, Suspense } from "react";

//import Componente2  from "./Componente2";
const Componente2 = lazy(() => import("../Components/Componente2"));

export const DragonBall = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Componente2 />
      </Suspense>
    </>
  );
};
