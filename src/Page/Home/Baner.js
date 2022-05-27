import React from 'react';

const Baner = () => {
    return (
       
        <div className="hero min-h-screen" style={{ background:`url(${'https://img.freepik.com/free-photo/creative-filmmaker-working-post-production-movie-while-working-from-home-girlfriend-background-is-walking-house-talking-phone_482257-22375.jpg?t=st=1653679481~exp=1653680081~hmac=568cc460bfd272881e8727b1b609d3bc6edf63619788c92474ca4c7df4e2d72c&w=1380'})`,backgroundRepeat : 'no-repeat', backgroundSize:'cover'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Intel® Processors for All That You Do</h1>
      <p className="mb-5 text-3xl">Computer Parts & Accessories</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
         
    );
};

export default Baner;