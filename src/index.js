import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Kiemtra from "./pages/kiemtra";
import Room from "./pages/room";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/kiemtra" element={<Kiemtra />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
