import React from 'react';

const Info = () => {
    return (
             <div className="hero min-h-screen">
               <div className="hero-content flex-col lg:flex-row">
                 <img src="https://www.bdstall.com/asset/product-image/giant_18833.jpg" className="max-w-sm rounded-lg shadow-2xl mr-10"/>
                    <div>
                    <h1 className="text-5xl font-bold">Intel H81 Express Chipset</h1>
                    <p className="py-6">he Gigabyte H81M-S2PV 8-Series motherboards support the latest Intel Core processors, offering a unique blend of features and technologies to provide the very best platform for your next PC build. High-current power delivery, performance-enhancing cache technologies, proprietary high-end audio features, smart networking, and device charging are just a few of the features available. It has Dual channel memory architecture, and support for DDR3 1600/1333 MHz memory modules.</p>
                    <button className="btn btn-secondary">Get Started</button>
                    </div>
             </div>
         </div>
    );
};

export default Info;