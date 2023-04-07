import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');
  let sta = state.context
  console.log({sta})
  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE', {newPassenger: value})
  }

  const submit = (e) => {
    e.preventDefault();
    send("ADD", {newPassenger: value})
    changeValue('')
  }

  return (
    <>
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>Agrega a las personas que van a volar ✈️</p>
        <div>
          {state.context.passengers.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button 
          disabled={!value.length}
          onClick={submit}
          className='Passengers-add button-secondary'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          disabled={!state.context.passengers.length}
          onClick={goToTicket}
          className='Passenger-pay button'
          type="button"
        >
          Ver mi ticket
        </button>
      </div>
      </form>
    </>
  );
};

