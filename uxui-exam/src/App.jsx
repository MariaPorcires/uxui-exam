import "./App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
