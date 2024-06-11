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

/* TODO: MAKE SURE TO SHOW ORDERS AND CHECKOUT PAGES IF USER IS LOGGED IN! */

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
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
