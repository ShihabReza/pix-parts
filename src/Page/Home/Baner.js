import React from 'react';

const Baner = () => {
    return (
       
        <div className="hero min-h-screen" style={{ background:`url(${'https://img.freepik.com/free-photo/videogamer-winning-first-person-shooter-tournament-using-rgb-keyboard-professional-headphones-pro-player-man-talking-with-other-players-online-game-competition-powerful-computer_482257-3933.jpg?t=st=1653544800~exp=1653545400~hmac=84f1ae15645b3f71716c0a796cb5cb68bc40a275f6ba660cf42ad5a4f4d6a8d4&w=1380'})`,backgroundRepeat : 'no-repeat', backgroundSize:'cover'}}>
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