import React from "react";
import { Header } from "../components/Header/Header";
import { Main   } from '../components/Main/Main';
import { Footer } from "../components/Footer/Footer";

function App(){
    return(
        <React.StrictMode>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </React.StrictMode>
    );
}

export { App }