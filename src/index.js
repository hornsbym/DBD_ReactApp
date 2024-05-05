import * as React from "react";
import "./Pages/Index/Index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Index/Index";
import HowItWorks from "./Pages/HowItWorks";
import Navbar from "./Pages/Index/Navbar";
import Footer from "./Pages/Index/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "how-it-works",
    element: <HowItWorks />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="bg-lightBlue">
    <Navbar />
      <div className={`flex flex-row py-32 justify-center`}>
        <div className={`flex flex-col gap-32 md:gap-48 w-[93.75%] md:w-[87.5%]`}>
          <RouterProvider router={router} />
        </div>
    </div>
 
    <Footer />
  </div>
);
