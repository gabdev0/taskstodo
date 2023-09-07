import React from "react";
import { Header } from '../components/Header/Header';
import { Main   } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';

function AppUI( { data, updateData } ){
    return(
        <React.StrictMode>
            <Header/>
            <Main
                data={ data }
                save={ updateData }
            />
            <Footer/>
        </React.StrictMode>
    );
}

export { AppUI }