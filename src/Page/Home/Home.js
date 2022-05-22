import React from 'react';
import Footer from '../Sheard/Footer';
import Baner from './Baner';
import Business from './Business';
import Info from './Info';
import Revews from './Revews';



import Services from './Services';

const Home = () => {
    
    return (
        <div>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <Business></Business>
            <Revews></Revews>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;