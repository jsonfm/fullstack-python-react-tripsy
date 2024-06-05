import { Toaster } from "sonner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";

// pages
import { Home } from "@/pages/home";
import { Login } from "./pages/login";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </Router>
      <Toaster closeButton richColors position="top-right" />
    </>
  );
};
