import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="hero min-h-screen bg-secondary text-white">
        <div class="hero-content flex-col lg:flex-row">
            <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/80435893_2468131793439374_7080255391342264320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEF7q8PTuRGxwLvON_Gx5BInC1wj20XQhycLXCPbRdCHN4JnJUi0QPuRNXm0roJozaLFFrwAPI9bLJOBWzSwMip&_nc_ohc=12eAAXRrq6MAX9NDYnR&_nc_ht=scontent.fdac27-1.fna&oh=00_AT9tYl4NN5XDaiddsdNdQHu1wE_J2UwXFNbH3Fllc5Ywng&oe=62B3E148" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 class="text-5xl font-bold">Name : Shihab</h1>
            <p class="py-6 text-lx font-bold">Email : shihabreza457@gmail.com</p>
            <p class="py-6 text-lx font-bold">Educational background : hsc complete</p>
            <p class="py-6 text-lx font-bold">Skills : html, css, javascript, boostrap, tailwindcss, react, nodejs</p>
            <h1 className='text-xl font-bold mb-4 text-primary'>My Protfolio Website</h1>
            <a href="https://majestic-llama-335a97.netlify.app/"><button class="btn btn-outline btn-primary m-3">Please Inter</button></a>
            <a href="https://loquacious-pudding-699268.netlify.app/Home"><button class="btn btn-outline btn-primary m-3">Please Inter</button></a>
            <a href="https://photo-graphi-9e3aa.web.app/"><button class="btn btn-outline btn-primary m-3">Please Inter</button></a>
            
            </div>
            
        </div>
        </div>
    
    );
};

export default About;