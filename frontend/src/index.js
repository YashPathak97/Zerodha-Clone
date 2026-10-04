import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

import HomePage from './landing_page/home/HomePage';
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/product/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Login';
import Signup from './landing_page/Signup';
import ScrollToTop from './landing_page/ScrollToTop';
import KiteRedirect from "./KiteRedirect";
import { Navigate } from "react-router-dom";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path="/kite" element={<KiteRedirect />} />
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer />
  </ScrollToTop>
  </BrowserRouter>
);

