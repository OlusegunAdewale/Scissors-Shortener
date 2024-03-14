import { initializeApp } from "firebase/app";

import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import LandingPage from "./screens/LandingPage";

import Footer from "./Components/Footer";
import MyUrl from "./screens/Myurl";
import RootLayout from "./layout";
import SignIn from "./screens/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/my-url",
    element: <MyUrl />,
  },
]);

const firebaseConfig = {
  apiKey: "AIzaSyCtuPU-W4XWkv1sV6Cr_0GSEwupMWw-de0",
  authDomain: "scissors-url-shortener-48555.firebaseapp.com",
  databaseURL: "https://scissors-url-shortener-48555-default-rtdb.firebaseio.com",
  projectId: "scissors-url-shortener-48555",
  storageBucket: "scissors-url-shortener-48555.appspot.com",
  messagingSenderId: "826803583967",
  appId: "1:826803583967:web:210f92dde3f3f8a699e26a",
  measurementId: "G-CJEPSQ78DK"
};

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <div
      style={{
        position: "fixed",
        overflow: "scroll",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "1 1 0%" }}>
        <RootLayout>
          <RouterProvider router={router} />
        </RootLayout>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
