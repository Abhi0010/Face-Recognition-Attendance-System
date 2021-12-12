import React from 'react'
import upload from '../../images/upload.jpg';
import attend from '../../images/attendance.png';
import user from '../../images/user.jpg';
import help from '../../images/help-icon.jpg';
import bgimage from '../../images/home2.jpeg';
import '../../styles/App.css';

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgimage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '110%',
  backgroundPosition: 'center',

};

export default function Home2() {
  return (
    <div class="home" style={divStyle}>
        <div class="row">
          <div class="column">
            <img src={upload}></img>
            <img src={attend}></img>
          </div>

          <div class="column">
            <img src={user}></img>
            <img src={help}></img>
          </div>
        </div>
    </div>
  )
}