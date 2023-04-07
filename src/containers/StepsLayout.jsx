import React from 'react';
import { Welcome } from '../components/Welcome';
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    return <Welcome />;
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 
