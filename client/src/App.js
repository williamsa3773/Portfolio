import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './Desktop.css'

const App = (props) => {

  return (
    <div className="App">
      <div className="Header">
        <h1>Andre Giovann Williams</h1>
      </div>
      <div className="Container">
        <div className="Left">
          <div className="About">
            <h2>About Me</h2>
            <p>I am a Full Stack Developer that likes creating new products with innovative designs. Being a veteran of the United States Navy, I have learned how to effectively work in large groups while remaining calm in high pressure environments. I like creating projects that challenge me to expand my knowledge and polish my skills.</p>
          </div>
          <div className="Skill">
            <h2>Skills</h2>
            <p>CompTIA A+ | Cisco Router/Switches | HTML | JavasScript | CSS | React | Ruby | PSQL | Express | Sequelize | Ruby on Rails |</p>
          </div>
        </div>
        <div className="Right">
          <div className="Head">
            <h2>Header</h2>
          </div>
          <div className="Display">
            <p>Display</p>
          </div>
          <div className="Description">
            <p>Description</p>
          </div>
          <div className="Transit">
            <div className="LArrow">
              <p>Left Arrow</p>
            </div>
            <div className="Timer">
              <p>Timer</p>
            </div>
            <div className="RArrow">
              <p>Right Arrow</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact">
        <p>Sample Text</p>
      </div>
      <div className="Footer">
        <p>Sample Text</p>
      </div>
    </div>
  )

}

export default App;
