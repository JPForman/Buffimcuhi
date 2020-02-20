import React from 'react';
import { Link } from 'react-router-dom';

function Buffimuchi(props){

let buffage = props.buffimuchiCharacter.ripped



  return (
    <div className="buffimuchiClass">

    <button onClick={props.onRoid}>Get Juiced!</button>
    <button onClick={props.onRawTamagotchi}>Eat Raw Tamagotchi!</button>
    <button onClick={props.onSleep}>Sleep!</button>
    <button onClick={props.onTossWeight}>Toss Weight Bra!</button>

    <h1>Your Buffimuchi: {props.buffimuchiCharacter.name}</h1>



<div className="bicepClass">
x {buffage}
</div>


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
      .bicepClass {
        height: ${buffage}px;
        border-radius: 100%;
        width: 5%;
        background-color: rgba(100, 0, 0, .1);

      }
      `}
      </style>
      </div>
    );
  }

  export default Buffimuchi;
