import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./shared/router/Router";

function App() {
  return (
    <>
      <RouterProvider router={routerConfig}/>
    </>
  );
}

export default App;
