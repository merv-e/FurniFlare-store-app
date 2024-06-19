import { ErrorElement } from "./components";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Orders,
  Login,
  Landing,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { loader as landingPageLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
        <Route
          index
          element={<Landing />}
          errorElement={<ErrorElement />}
          loader={landingPageLoader}
        />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/:id"
          loader={SingleProductLoader}
          errorElement={<ErrorElement />}
          element={<SingleProduct />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="error" element={<Error />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="/register" element={<Register />} errorElement={<Error />} />
      <Route path="/login" element={<Login />} errorElement={<Error />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
