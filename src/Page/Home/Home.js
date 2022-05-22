import React from 'react';
import Baner from './Baner';
import Business from './Business';
import Info from './Info';
import Services from './Services';

const Home = () => {
    
    return (
        <div>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <Business></Business>
        </div>
    );
};

export default Home;