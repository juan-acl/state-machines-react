import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    //send('CANCEL',
    if(state.matches("tickets")) {
    send("FINISH") 
    }else {
      send("CANCEL")
    }
      //{newPassenger: [], selectedCountry : ''}
  
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Book a fly ✈</h1>
      {!state.matches('inicial') &&  
        <button className='Nav-cancel button-secondary' onClick={goToWelcome} >Cancelar</button>
      }
    </nav>
  );
}; 
