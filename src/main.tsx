import { createRoot } from "react-dom/client";
import { HeoresApp } from "./HeoresApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HeoresApp />
  </BrowserRouter>
);
