import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./utils/state/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact";
import Map from "./pages/map";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>{<Contact />}</App>,
  },
  {
    path: "/contact",
    element: <App>{<Contact />}</App>,
  },
  {
    path: "/maps",
    element: <App>{<Map />}</App>,
  },
]);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
