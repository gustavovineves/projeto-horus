import './home.css'
import SobreSection from "./components/postsSections/sobreSection/sobreSection.jsx";
import DeveloperSection from "./components/postsSections/developerSection/developerSection.jsx";
import ControleSection from "./components/controleSection/controleSection.jsx";
import React from 'react'
import UserSection from "./components/postsSections/userSection/userSection.jsx";
import DuvidasSection from './components/duvidasSection/duvidasSection';
function Home() {

    return (
        <main id={'container_home'}>
            <ControleSection/>
            <UserSection/>
            <DeveloperSection/>
            <DuvidasSection/>
            <SobreSection/>
        </main>
    );
}

export default Home;