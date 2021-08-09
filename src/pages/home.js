import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <React.Fragment>
        <div className="App">
        <header className="App-header">
            <p>nav goes here</p>
        </header>
        </div>
            <p>
                SCOTT HIKES Home Page.
                Click  <Link to="/about">HERE</Link> for ABOUT PAGE 
            </p>
    </React.Fragment>
  );
}

export default Home;
