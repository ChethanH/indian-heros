import React, { Component } from 'react';
import Typical from 'react-typical';
import logo from '../src/images/logo.png';
import alpha from '../src/images/alphabets.png';
import linkedin from '../src/images/social-media/linkedin.png';
import instagram from '../src/images/social-media/instagram.png';
import facebook from '../src/images/social-media/facebook.png';
import twitter from '../src/images/social-media/twitter.png';
import './App.css';

const heros = ["Abbakka Chowta", 1000,
"Bhagat Singh", 1000,
"Chandra Shekhar Azad", 1000,
"Dadabhai Naoroji", 1000,
"E [Suggestion Required]", 1000,
"Fazle Haq Khairabadi", 1000,
"Govind Ballabh Pant", 1000,
"Hasrat Mohani", 1000,
"I [Suggestion Required]",
"Jawaharlal Nehru", 1000,
"Kanaiyalal Maneklal Munshi", 1000,
"Lal Bahadur Shastri", 1000,
"Mohandas Karamchand Gandhi", 1000,
"N [Suggestion Required]", 1000,
"O [Suggestion Required]", 1000,
"Pingali Venkayya", 1000,
"Q [Suggestion Required]", 1000,
"Rani Lakshmi Bai", 1000,
"Subhash Chandra Bose", 1000,
"Tantia Tope", 1000,
"Udham Singh", 1000,
"Vinayak Damodar Savarkar", 1000,
"War Batukeshwar Dutt", 1000,
"X [Suggestion Required]", 1000,
"Y [Suggestion Required]", 1000,
"Z [Suggestion Required]", 1000];

const alphabetsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { alphaChar: "" }
    this.callAlpha = this.callAlpha.bind(this);
  }
  callAlpha(event){
    event.preventDefault();
    this.setState({alphaChar: "alphabets"});
  } 
  render () {
    let renderDiv;
    if(this.state.alphaChar === "alphabets") {
      renderDiv = <div className="characters-container">
                    <Learn value={alphabetsArray} />
                  </div>
    } else {
      renderDiv = <div className="heroes-name">
                    <Typical 
                      loop={Infinity}
                      wrapper="b"
                      steps={heros}
                    />
                  </div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <a href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <a href="#">
            <img src={alpha} className="alphabets" alt="alphabets" onClick={this.callAlpha}/>
          </a>
          {renderDiv}
          <Footer />
          <SocialMedia />
        </header>
      </div>
    );
  }
}

const Footer = () => {
  return(
    <footer className="">
      <span>Developed by <a href="https://www.linkedin.com/in/chethan-h-21545493/" target="_blank">Chethan H</a></span>
    </footer>
  );
}

const SocialMedia = () => {
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

const Learn = (props) => {
  const char = props.value;
  const renderEle = char.map(ele => 
    <span className="characters" key={ele}>
      <kbd>{ele}</kbd>
    </span>
  );
  return(
    renderEle
  );
}

export default App;
