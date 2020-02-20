import React from 'react';
import { Link } from 'react-router-dom';

function Buffimuchi(props){

//
// function test() {
//   console.log(`${props.buffimuchiCharacter.name}`);
//   console.log(`${props.buffimuchiCharacter.primaryColor}`);
//   console.log(`${props.buffimuchiCharacter.secondaryColor}`);
//   console.log(`${props.buffimuchiCharacter.energy}`);
//   console.log(`${props.buffimuchiCharacter.ripped}`);
//   console.log(`${props.buffimuchiCharacter.happiness }`);
//   console.log(`${props.buffimuchiCharacter.formattedWaitTime } OLD`);
//   console.log(props);
// }



  return (
    <div className="buffimuchiClass">

    <button onClick={props.onRoid}>Get Juiced!</button>
    <button onClick={props.onRawTamagotchi}>Eat Raw Tamagotchi!</button>
    <button onClick={props.onSleep}>Sleep!</button>
    <button onClick={props.onTossWeight}>Toss Weight Bra!</button>

    <h1>Your Buffimuchi</h1>



<p>{props.buffimuchiCharacter.name}</p>
<p>{props.buffimuchiCharacter.formattedWaitTime} OLD.</p>
<p>{props.buffimuchiCharacter.primaryColor}</p>
<p>{props.buffimuchiCharacter.secondaryColor}</p>
<p>Energy: {props.buffimuchiCharacter.energy}</p>
<p>Rippage: {props.buffimuchiCharacter.ripped}</p>
<p>Happiness: {props.buffimuchiCharacter.happiness}</p>



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
