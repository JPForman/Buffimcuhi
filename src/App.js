import React from 'react';
import Moment from 'moment';


import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NewBuffimuchi from './NewBuffimuchi';
import Buffimuchi from './Buffimuchi';

import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffimuchiCharacter: {timeOpen: new Moment()}
    };
    this.handleNewBuffimuchi = this.handleNewBuffimuchi.bind(this);
    this.handleRoid = this.handleRoid.bind(this);
    this.handleRawTamagotchi = this.handleRawTamagotchi.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handleTossWeight = this.handleTossWeight.bind(this);
    }


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateBuffimuchiAge(),
    5000);
  }



  updateBuffimuchiAge(props) {
    console.log("check");
    let updateBuffimuchiCharacter = this.state.buffimuchiCharacter;
    updateBuffimuchiCharacter.energy = (updateBuffimuchiCharacter.energy + 1);
    updateBuffimuchiCharacter.ripped = (updateBuffimuchiCharacter.ripped - 1);
    updateBuffimuchiCharacter.happiness = (updateBuffimuchiCharacter.happiness + 1);
    updateBuffimuchiCharacter.formattedWaitTime = (updateBuffimuchiCharacter.timeOpen).fromNow(true);
    this.setState({buffimuchiCharacter: updateBuffimuchiCharacter});

    if (updateBuffimuchiCharacter.energy < 1) {
      alert('ya dead, foo! enrgyyyyy');
    }
    else if (updateBuffimuchiCharacter.happiness < 80) {
      alert('ya dead, foo! hpyyyyyy');
      }
    else if (updateBuffimuchiCharacter.ripped < 1) {
      alert('ya dead, foo! skinNbones');
    }
    else if (updateBuffimuchiCharacter.ripped > 500 ) {
      alert('ya wonnns');
    }
  }

  handleNewBuffimuchi(newBuffimuchi) {
    newBuffimuchi.formattedWaitTime = (newBuffimuchi.timeOpen).fromNow(true);
    this.setState({buffimuchiCharacter: newBuffimuchi});
  }

  handleRoid() {
    let updateBuffimuchiCharacter = this.state.buffimuchiCharacter
    updateBuffimuchiCharacter.energy = (updateBuffimuchiCharacter.energy + 20)
    updateBuffimuchiCharacter.ripped = (updateBuffimuchiCharacter.ripped + 10)
    updateBuffimuchiCharacter.happiness = (updateBuffimuchiCharacter.happiness - 25)
    this.setState({buffimuchiCharacter: updateBuffimuchiCharacter})

    let button = document.getElementById('buttonRoid')
    button.style.display = "none";
    setTimeout(function(){
      button.style.display = "initial";
    }, 1000);

  }

  handleRawTamagotchi() {
    let updateBuffimuchiCharacter = this.state.buffimuchiCharacter
    updateBuffimuchiCharacter.energy = (updateBuffimuchiCharacter.energy + 15)
    updateBuffimuchiCharacter.ripped = (updateBuffimuchiCharacter.ripped - 1)
    updateBuffimuchiCharacter.happiness = (updateBuffimuchiCharacter.happiness + 15)
    this.setState({buffimuchiCharacter: updateBuffimuchiCharacter})

    let button = document.getElementById('buttonRawTamagotchi')
    button.style.display = "none";
    setTimeout(function(){
      button.style.display = "initial";
    }, 1000);

  }

  handleSleep() {
    let updateBuffimuchiCharacter = this.state.buffimuchiCharacter
    updateBuffimuchiCharacter.energy = (updateBuffimuchiCharacter.energy + 60)
    updateBuffimuchiCharacter.ripped = (updateBuffimuchiCharacter.ripped - 10)
    updateBuffimuchiCharacter.happiness = (updateBuffimuchiCharacter.happiness + 10)
    this.setState({buffimuchiCharacter: updateBuffimuchiCharacter})

    let button = document.getElementById('buttonSleep')
    button.style.display = "none";
    setTimeout(function(){
      button.style.display = "initial";
    }, 5000);

  }

  handleTossWeight() {
    let updateBuffimuchiCharacter = this.state.buffimuchiCharacter
    updateBuffimuchiCharacter.energy = (updateBuffimuchiCharacter.energy - 20)
    updateBuffimuchiCharacter.ripped = (updateBuffimuchiCharacter.ripped + 20)
    updateBuffimuchiCharacter.happiness = (updateBuffimuchiCharacter.happiness - 1)
    this.setState({buffimuchiCharacter: updateBuffimuchiCharacter})

    let button = document.getElementById('buttonTossWeight')
    button.style.display = "none";
    setTimeout(function(){
      button.style.display = "initial";
    }, 3000);

  }

  render (){

  return (
    <div className="App">

    <Header/>


    <Switch>

    <Route exact path='/' render={()=><NewBuffimuchi onNewTicketCreation={this.handleNewBuffimuchi} />} />




    <Route path='/Buffimuchi' render={()=><Buffimuchi
      buffimuchiCharacter={this.state.buffimuchiCharacter}
      onRawTamagotchi={this.handleRawTamagotchi}
      onSleep={this.handleSleep}
      onTossWeight={this.handleTossWeight}
      onRoid={this.handleRoid} />} />



    </Switch>

    <style>{`
      .App {
        height: 100vh;
        overflow: hidden;
      }
      `}
      </style>
      </div>
    );
  }
}

export default App;
