import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { DetailedPokemon } from "../../pages/detailed/DetailedPokemon";
import { Favorites } from "../../pages/favorites/Favorites";
import { pathsRoutes } from "../enums/pathsRoutes";


export const routerConfig = createBrowserRouter([
    {
      path: pathsRoutes.home,
      element: <Home/>,
      children: [
        
        
      ],
    },
    {
      path: pathsRoutes.favorites,
      element: <Favorites/>,
    },
    {
      path: pathsRoutes.pokemon,
      element: <DetailedPokemon/>
    },
  ]);
  
  