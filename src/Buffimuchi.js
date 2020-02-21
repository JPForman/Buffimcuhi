import React from 'react';
import { Link } from 'react-router-dom';

function Buffimuchi(props){

  let buffage = props.buffimuchiCharacter.ripped
  let energy = props.buffimuchiCharacter.energy
  let happiness = props.buffimuchiCharacter.happiness
  let primaryColor = props.buffimuchiCharacter.primaryColor
  let secondaryColor = props.buffimuchiCharacter.secondaryColor

  return (
    <div className="buffimuchiClass">

    <div className='buttonClass'>

      <button id='buttonRoid' onClick={props.onRoid}>Get Juiced!</button>
      <button id='buttonRawTamagotchi' onClick={props.onRawTamagotchi}>Eat Raw Tamagotchi!</button>
      <button id='buttonSleep' onClick={props.onSleep}>Sleep!</button>
      <button id='buttonTossWeight' onClick={props.onTossWeight}>Toss Weight Bra!</button>

    </div>


    <h1>Your Buffimuchi: {props.buffimuchiCharacter.name}</h1>
    <div className="bodyClass">
    <div className="bodyChildClass">
    <table cellpadding="0" border="0">
    <tr>
    <td></td>
    <td rowspan="2" className="bicepClass"></td>
    <td valign="bottom"><div className="headClass">..</div></td>
    <td rowspan="2" className="bicepClass"></td>
    <td></td>
    </tr>
    <tr>
    <td valign="bottom"><div className='handLeftClass'>👎🏻</div></td>
    <td rowspan="2" className='neckClass'>~</td>
    <td valign="bottom"><div className='handRightClass'>👍🏻</div></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td className='stomachClass'>|</td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td><div className='legLeftClass'>👢</div></td>
    <td></td>
    <td><div className='legRightClass'>👢</div></td>
    <td></td>
    </tr>
    </table>
    </div>
    </div>

    <p>{props.buffimuchiCharacter.formattedWaitTime} OLD.</p>
    <p>{props.buffimuchiCharacter.primaryColor}</p>
    <p>{props.buffimuchiCharacter.secondaryColor}</p>
    <p>Energy: {props.buffimuchiCharacter.energy}</p>
    <p>Rippage: {props.buffimuchiCharacter.ripped}</p>
    <p>Happiness: {props.buffimuchiCharacter.happiness}</p>



    <style>{`
      .buttonClass {
      height: 4vh;
      padding-top: 3vh;
      }

      .bodyClass {
        text-align: center;
        max-width: 50%;
        border-radius: 100%;
        background-color: rgba(0, 100, 0, .1);
        padding: 2%;
        margin-left: auto;
        margin-right: auto;
      }

      .bodyChildClass {
        display: inline-block
      }

      .buffimuchiClass {
        height: 90vh;
        overflow: hidden;
        background-color: rgba(0, 0, 100, .1);
        text-align: center;
      }

      .headClass {
        width: 40px;
        height: 40px;
        margin: auto;
        background-color: rgba(200, 150, 150, .3);
        border-radius: 100%;
      }

      .neckClass {
        background-color: rgba(200, 150, 150, .3);
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        height: 100%;
        // width: 50%;
        overflow: hidden;
        background-color: ${primaryColor};
      }

      .handLeftClass {
        transform: rotate(180deg) perspective(0);
        position: relative;
        bottom: 0;
      }

      .bicepClass {
        background-color: rgba(200, 150, 150, .3);
        height: ${buffage/2}px;
        width: ${buffage/3}px;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        border-bottom: 5px double black;
      }

      .chestClass {
        // width: ${buffage/4}px;
        background-color: ${secondaryColor};
      }
      .stomachClass {
        // width: ${buffage/4}px;
        background-color: ${secondaryColor};
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 100%;
      }

      .legLeftClass {
        // width: ${buffage/4}px;
        text-align: left;
        transform: scaleX(-1);
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
      }
      .legRightClass {
        text-align: left;

        // width: ${buffage/4}px;
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
      }



      `}
      </style>
      </div>
    );
  }

  export default Buffimuchi;
