import { lazy, Suspense } from "react";
import "./styles/App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store/Store";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./components/Error";
const Home = lazy(() => import("./modules/home/components/Home"));
const Contact = lazy(() => import("./modules/Contact/Contact"));
const Products = lazy(() => import("./modules/products/Products"));
const Details = lazy(() => import("./modules/detail/Details"));

function App() {
  console.log("wertyuioxhjcvbnm");
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>hihihihihii</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="products/:name"
                  element={
                    <ErrorBoundary fallbackRender={FallbackRender}>
                      <Products />
                    </ErrorBoundary>
                  }
                />
                <Route path="contact" element={<Contact />} />
                <Route
                     path="products/detail/:id"
                  element={
                    <ErrorBoundary fallbackRender={FallbackRender}>
                      <Details />
                    </ErrorBoundary>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
