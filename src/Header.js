import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="headerClass">
    <h1>Buffi-MUCH-i</h1>
    <Link to="/">New Buffimuchi</Link> | <Link to="/Buffimuchi">Your Buffimuchi</Link>
    <hr/>
    <style>{`
      .headerClass {
        height: 10vh;
        text-align: center;
      }
      `}
      </style>
      </div>
    );
  }

  export default Header;
