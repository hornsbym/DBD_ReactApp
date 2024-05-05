import * as React from "react";
import "./Pages/Index/Index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Index/Index";
import HowItWorks from "./Pages/HowItWorks";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-lightBlue">
        <ScrollToTop />
        <Navbar />
        <div className={`flex flex-row py-32 justify-center`}>
          <div
            className={`flex flex-col gap-32 md:gap-48 w-[93.75%] md:w-[87.5%]`}
          >
            <Home />
          </div>
        </div>

        <Footer />
      </div>
    ),
  },
  {
    path: "how-it-works",
    element: (
      <div className="bg-lightBlue">
        <ScrollToTop />
        <Navbar />
        <div className={`flex flex-row py-32 justify-center`}>
          <div
            className={`flex flex-col gap-32 md:gap-48 w-[93.75%] md:w-[87.5%]`}
          >
            <HowItWorks />
          </div>
        </div>
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
