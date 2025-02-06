import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Item from "./components/Item";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<Item />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
