import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo1 from "./logo1.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import fb from "./facebook.svg";
// import logoS from "./footerelements.js"
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <img src={logo1} class="logo1" alt="logo PM"/>
        <p className='footer-subscription-heading'>
          
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum nunc dolor, ac blandit turpis ultricies eget.  adipiscing elit. Nam condimentum nunc dolor, ac blandit turpis ultricies eget. 
        </p>
        <p className='footer-subscription-text'>
          {/* You can unsubscribe at any time. */}
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button className='btnp' buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
       <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items f1'>
            <h2>Support</h2>
            <Link to='/sign-up'>About</Link>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Privacy and policy</Link>
            <Link to='/'>Help</Link>
            
          </div>
          <div class='footer-link-items f2'>
            <h2>Address</h2>
            <Link to='/'>A.  Jalan Jayakatwang  No.301
Ngasem, Kediri</Link>
          </div>
          <div class='footer-link-items f3'>
            <h2>Contact Us</h2>
            <Link to='/'>E.  Hello@pmguide.com</Link>
            <Link to='/'>P.  (+62) 82334670000</Link>
            
          </div>
        </div>
        </div>
        
        
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fab fa-typo3' />
            </Link>
          </div>
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <img src={fb} alt="facebook" />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <img src={insta} alt="instagram" />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <img src={twitter} alt="Twitter" />
              
            </Link>
           
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Footer;