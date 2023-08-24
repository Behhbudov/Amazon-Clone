import RootLayout from "./components/rootLayout/RootLayout";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
