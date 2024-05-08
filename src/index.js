import * as React from "react";
import "./Pages/Index/Index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Index/Index";
import HowItWorks from "./Pages/HowItWorks";
import PageContainer from "./Components/PageContainer";
import FAQPage from "./Pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <Home />
      </PageContainer>
    ),
  },
  {
    path: "how-it-works",
    element: (
      <PageContainer>
        <HowItWorks />
      </PageContainer>
    ),
  },
  {
    path: "faqs",
    element: (
      <PageContainer>
        <FAQPage />
      </PageContainer>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
