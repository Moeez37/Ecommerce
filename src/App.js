import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import PageLayout from "../src/Layout/Layout.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import './App.css';
import Home from "./Pages/Home/Home.js";
import { Provider } from "react-redux";
import store from "./store/index.js";
import UserProfile from "./Pages/UserProfile/UserProfile.js";

const router = createBrowserRouter([
  {
    path: "/", element: <PageLayout />
    , children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/person", element: <UserProfile /> }
    ]
  }

])
function App() {
  return (
    <Provider store={store}> <RouterProvider router={router} /></Provider>
  );
}

export default App;
