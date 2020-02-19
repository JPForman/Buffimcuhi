import React from 'react';
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
      buffimuchiCharacter: 'null'
    };
    this.handleNewBuffimuchi = this.handleNewBuffimuchi.bind(this);
  }

  handleNewBuffimuchi(newBuffimuchi) {
    newBuffimuchi.formattedWaitTime = (newBuffimuchi.timeOpen).fromNow(true);
    this.setState({buffimuchiCharacter: newBuffimuchi});
  }

  render (){

  return (
    <div className="App">

    <Header/>


    <Switch>

    <Route exact path='/' render={()=><NewBuffimuchi onNewTicketCreation={this.handleNewBuffimuchi} />} />




    <Route path='/Buffimuchi' render={()=><Buffimuchi buffimuchiCharacter={this.state.buffimuchiCharacter} />} />



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
