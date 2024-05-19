import React from 'react';
import './actionbutton.styles.css';

interface ButtonProps {
  action: React.MouseEventHandler;
  text: string;
}

const Actionbutton: React.FC<ButtonProps> = ({ action, text }) => {
  return (
    <button className="actionButton" onClick={action}>
      {text}
    </button>
  );
};

export default Actionbutton;
