import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RecipeContext from "./context/RecipeContext.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <HashRouter>
      <App />
      <ToastContainer />
      <ScrollToTop/>
    </HashRouter>
  </RecipeContext>
);
