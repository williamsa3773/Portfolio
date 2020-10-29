import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'

const App = (props) => {

  return (
    <div className="App">
      <div className="Header">
        <h1>Andre Giovann Williams</h1>
      </div>
      <div className="Container">
        <div className="Left">
          <p>sample text left</p>
        </div>
        <div className="Right">
          <p>sample text right</p>
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
