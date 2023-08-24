import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from "./components/Header/Header";
import { Main   } from './components/Main/Main';
import { Footer } from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>
);