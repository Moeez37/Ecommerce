import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import PageLayout from "../src/Layout/Layout.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import './App.css';
import Home from "./Pages/Home/Home.js";
import { Provider } from "react-redux";
import store from "./store/index.js";
import UserProfile from "./Pages/UserProfile/UserProfile.js";
import ProductContainer from "./Pages/Home/Components/ProductContainer.js";
import ProductDetail from "./Pages/Home/Components/ProductDetail.js";
import Cart from "./Pages/Cart/Cart.js";

const router = createBrowserRouter([
  {
    path: "/", element: <PageLayout />
    , children: [
      { path: "", element: <Home /> },
      { path: "product", element: <ProductContainer /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "person", element: <UserProfile /> },
      { path: "cart", element: <Cart /> }
    ]
  }

])
function App() {
  return (
    <Provider store={store}> <RouterProvider router={router} /></Provider>
  );
}

export default App;
