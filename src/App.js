import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/hotels",
      element: <List/>,
    },
    {
      path: "/hotels/:id",
      element: <Hotel/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
