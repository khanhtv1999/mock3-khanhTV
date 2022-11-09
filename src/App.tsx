import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/NavbarComponent/NavbarComponent";
import IntroduceComponent from "./component/IntroduceComponent/IntroduceComponent";
import HomePage from "./pages/HomePageComponent/HomePage";
import SharedLayout from "./component/SharedLayoutComponent/SharedLayout";
import BlogPage from "./pages/BlogPageComponent/BlogPage";
import WorkPage from "./pages/WorkPage/WorkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="work" element={<WorkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
