import React from 'react';
import './roll.styles.css';

import { RollProps } from '../../interfaces/interfaces';

const Roll: React.FC<RollProps> = ( roll ) => {
  return (
  <option className='roll'>
    <label>{roll.rollName}</label>
    </option>);
};

export default Roll;
