import React from 'react';
import { Link } from 'react-router-dom';

function Buffimuchi(props){


function test() {
  console.log(`${props.buffimuchiCharacter.name}`);
  console.log(`${props.buffimuchiCharacter.primaryColor}`);
  console.log(`${props.buffimuchiCharacter.secondaryColor}`);
  console.log(`${props.buffimuchiCharacter.energy}`);
  console.log(`${props.buffimuchiCharacter.ripped}`);
  console.log(`${props.buffimuchiCharacter.happiness }`);
}

  return (
    <div className="buffimuchiClass">
    <button onClick={test}>Click for console log.</button>

    <h1>Your Buffimuchi</h1>



<p>{props.buffimuchiCharacter.name}</p>
<p>{props.buffimuchiCharacter.primaryColor}</p>
<p>{props.buffimuchiCharacter.secondaryColor}</p>

    <style>{`
      .buffimuchiClass {
        height: 90vh;
        overflow: hidden;

        background-color: rgba(0, 0, 100, .1);
        text-align: center;
      }
      `}
      </style>
      </div>
    );
  }

  export default Buffimuchi;
