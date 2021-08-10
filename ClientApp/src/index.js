import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./components/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const store = configureStore({});

ReactDOM.render(
  <Auth0Provider
    domain="sufyan-dev.us.auth0.com"
    clientId="CvlAksE1dLBv8SgbdW71L26ovxqpMsyA"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  rootElement
);

registerServiceWorker();
