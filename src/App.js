import React, { Component } from 'react';
import Typical from 'react-typical';
import logo from '../src/images/logo.png';
import alpha from '../src/images/alphabets.png';
import linkedin from '../src/images/social-media/linkedin.png';
import instagram from '../src/images/social-media/instagram.png';
import facebook from '../src/images/social-media/facebook.png';
import twitter from '../src/images/social-media/twitter.png';
import './App.css';
import {heros, alphabetsArray, herosList} from '../src/constantArrays.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { alphaChar: "" }
    this.callAlpha = this.callAlpha.bind(this);
    this.herosList = this.herosList.bind(this);
  }
  callAlpha(event) {
    event.preventDefault();
    this.setState({alphaChar: "alphabets"});
  } 
  herosList(event) {
    event.preventDefault();
    this.setState({alphaChar: "herosList"});
  } 
  render () {
    let renderDiv;
    if(this.state.alphaChar === "alphabets") {
      renderDiv = <div className="characters-container">
                    <Learn value={alphabetsArray} />
                  </div>
    } else if(this.state.alphaChar === "herosList") {
      renderDiv = <TableData value={herosList}/>
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
            <img src={logo} className="App-logo" alt="logo" onClick={this.herosList} />
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
      <span className="suggestion-mail">Write suggestions to <a href="mailto:chethan.hanu@gmail.com">chethan.hanu@gmail.com</a></span>
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
  let renderEle = char.map(ele => 
    <span className="characters" key={ele}>
      <kbd>{ele}</kbd>
    </span>
  );
  return(renderEle);
}

const TableData = (props) => {
  const list = props.value;
  let renderEle = <div className="table-content">
    <table>
      <caption>Hero's List</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>BOD</th>
          <th>Notable Activities</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {list.map((ele, index) => 
          // {console.log(ele, index);},
          <tr key={index}>
            <td>{ele.name}</td>
            <td>{ele.dob}</td>
            <td>{ele.activities}</td>
            <td><a href={ele.links} target="_blank">{ele.links}</a></td>
          </tr>  
        )}
      </tbody>
    </table>
    </div>
  return (renderEle);
}

export default App;
