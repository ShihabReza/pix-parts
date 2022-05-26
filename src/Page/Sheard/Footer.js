import React from 'react';

const Footer = () => {
    return (
      <div>
        <div>
          <footer className="footer p-10 bg-secondary  text-neutral-content mt-24">
              <div>
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </div> 
              <div>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </div> 
              <div>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </div>
              
        </footer>
        
              <p className='text-center font-bold text-xl'>Copyright © 2022 - All right reserved by Pix-Group Ltd</p>
              
        </div>
    
      </div>
    );
};

export default Footer;