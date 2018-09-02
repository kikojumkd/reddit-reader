import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { injectGlobal } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// global styles
// tslint:disable-next-line
injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Open Sans", sans-serif;
    font-size: 1.8rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --content-width: 72rem;
    --sidebar-width: 20rem;
  }
`;
