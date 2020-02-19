import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

function NewBuffimuchi(props){
  let _name = null;
  let _primaryColor = null;
  let _secondaryColor = null;
  let _energy = 100;
  let _ripped = 50;
  let _happiness = 90;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(props);
    props.onNewTicketCreation({name: _name.value, primaryColor: _primaryColor.value, secondaryColor: _secondaryColor.value, energy: _energy, ripped: _ripped, happiness: _happiness, id: v4(), timeOpen: new Moment()});
    _name.value = '';
    _primaryColor.value = '';
    _secondaryColor.value = '';
    props.history.push('/Buffimuchi');
  }

  return (
    <div className="newBuffimuchiClass">
    <h1>New Buffimuchi</h1>
    <form onSubmit={handleNewTicketFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Name Your Buffimuchi'
    ref={(input) => {_name = input;}}/>
    <input
    type='color'
    id='primaryColor'
    ref={(input) => {_primaryColor = input;}}/>
    <input
    type='color'
    id='secondaryColor'
    ref={(input) => {_secondaryColor = input;}}/>

    <button type='submit'>home</button>

    </form>

    <style>{`
      .newBuffimuchiClass {
        height: 90vh;
        overflow: hidden;

        background-color: rgba(0, 100, 0, .1);
        text-align: center;
      }
      `}
      </style>
      </div>
    );
  }

  NewBuffimuchi.propTypes = {
    onNewTicketCreation: PropTypes.func
  };


  export default withRouter(NewBuffimuchi);
