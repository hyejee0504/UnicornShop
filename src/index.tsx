import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { fetchGetProducts } from "./reducers/productSlice";
import ScrollToTop from "./components/common/ScrollToTop";

//앱이 시작되면 상품들 불러오기
store.dispatch(fetchGetProducts());

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
