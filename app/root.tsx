import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store-core";
import "./app.css";
import ThemedAppWrapper from "./atomic_design/natural_rules/ThemeProviderWrapper";

// 🧩 Montaje raíz de la app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemedAppWrapper />
    </BrowserRouter>
  </Provider>
);
