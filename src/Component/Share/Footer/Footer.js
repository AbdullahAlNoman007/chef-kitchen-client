import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../Assets/Logo/image.svg'
import { FaYoutube,FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white lg:mt-auto">
        <div>
        <img src={footer} style={{height:'80px',width:'65px'}} className='text-white' alt="" />
        <p><span className='text-2xl font-semibold'>Chef Food Kitchen</span><br/>Providing reliable food service since 2020</p>
       <div className='grid grid-flow-col gap-4'>
       <Link><FaFacebook/></Link>
      <Link><FaInstagram/></Link>
      <Link><FaYoutube/></Link>
      <Link><FaTwitter/></Link>
       </div>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a href='/' className="link link-hover">Branding</a> 
          <a href='/' className="link link-hover">Design</a> 
          <a href='/' className="link link-hover">Marketing</a> 
          <a href='/' className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a  href='/' className="link link-hover">About us</a> 
          <a  href='/' className="link link-hover">Contact</a> 
          <a  href='/' className="link link-hover">Jobs</a> 
          <a  href='/' className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a  href='/' className="link link-hover">Terms of use</a> 
          <a  href='/' className="link link-hover">Privacy policy</a> 
          <a  href='/' className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;