import React from 'react';

const Baner = () => {
    return (
       
        <div className="hero min-h-screen" style={{ background:`url(${'https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?t=st=1653188766~exp=1653189366~hmac=1a765930015e37d01f494875d4975f01d4e75b5bc421161852130bea59bcd80a&w=1380'})`,backgroundRepeat : 'no-repeat', backgroundSize:'cover'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Intel® Processors for All That You Do</h1>
      <p className="mb-5 text-3xl">Computer Parts & Accessories</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
         
    );
};

export default Baner;