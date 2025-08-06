import React from 'react';
import './roll.styles.css';

import { RollProps } from '../../interfaces/interfaces';

const Roll: React.FC<RollProps> = ( roll ) => {
  return (
  <li>
    <span>{roll.rollName}</span>
    </li>);
};

export default Roll;
