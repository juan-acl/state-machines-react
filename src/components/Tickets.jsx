import React from 'react';
import './Tickets.css';

export const Tickets = ({ send, state }) => {
  const finish = () => {
    send("FINISH")
  };

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
      {state.context.passengers.map((item, index) => <p key={index+1}>{item}</p>)}
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{state.context.selectedCountry}</div>
        <div className='Tickets-passengers'>
          <span>✈</span>
          </div>
          </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finalizar</button>
    </div>
  );
}; 
