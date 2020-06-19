import React from 'react';
import logo from '../src/images/logo.png';
import alpha from '../src/images/alphabets.png';
import linkedin from '../src/images/social-media/linkedin.png';
import instagram from '../src/images/social-media/instagram.png';
import facebook from '../src/images/social-media/facebook.png';
import twitter from '../src/images/social-media/twitter.png';
import './App.css';

const heros = ["Abbakka Chowta",
"Bhagat Singh",
"Chandra Shekhar Azad",
"Dadabhai Naoroji",
"E",
"Fazle Haq Khairabadi",
"Govind Ballabh Pant",
"Hasrat Mohani",
"I",
"Jawaharlal Nehru",
"Kanaiyalal Maneklal Munshi",
"Lal Bahadur Shastri",
"Mohandas Karamchand Gandhi",
"N",
"O",
"Pingali Venkayya",
"Q",
"Rani Lakshmi Bai",
"Subhash Chandra Bose",
"Tantia Tope",
"Udham Singh",
"Vinayak Damodar Savarkar",
"War Batukeshwar Dutt",
"X",
"Y",
"Z"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a href="#">
          <img src={alpha} className="alphabets" alt="alphabets" />
        </a>
        <Footer />
        <SocialMedia />
      </header>
    </div>
  );
}

function Footer() {
  return(
    <footer className="">
      <span>Developed by <a href="https://www.linkedin.com/in/chethan-h-21545493/" target="_blank">Chethan H</a></span>
    </footer>
  );
}

function SocialMedia() {
  return(
    <div className="social-media-icon">
      <span className="media-icons">
        <ul>
          <a href="https://www.linkedin.com/in/chethan-h-21545493/" target="_blank" title="Linkedin">
            <li><img src={linkedin} className="social-media-icons" alt="linkedin"/></li>
          </a>
          <a href="https://twitter.com/ChethanHanu" target="_blank" title="Twitter">
            <li><img src={twitter} className="social-media-icons" alt="twitter"/></li>
          </a>
          <a href="https://www.facebook.com/chethan.hanu/" target="_blank" title="Facebook">
            <li><img src={facebook} className="social-media-icons" alt="facebook"/></li>
          </a>
          <a href="https://www.instagram.com/chethan_cheth/" target="_blank" title="Instagram">
            <li><img src={instagram} className="social-media-icons" alt="instagram"/></li>
          </a>
        </ul>
      </span>
    </div>
  );
}

export default App;
