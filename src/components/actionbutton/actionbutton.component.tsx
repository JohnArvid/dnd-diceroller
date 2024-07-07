import React from 'react';
import './actionbutton.styles.css';
import { ButtonProps } from '../../interfaces/interfaces';

const Actionbutton: React.FC<ButtonProps> = ({ action, text }) => {
  return (
    <button className="actionButton" onClick={action}>
      {text}
    </button>
  );
};

export default Actionbutton;
