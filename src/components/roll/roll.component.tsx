import React from 'react';
import './roll.styles.css';

import { RollProps } from '../../interfaces/interfaces';

const Roll: React.FC<RollProps> = ( roll ) => {
  return (
  <option className='roll' value={roll.rollName}>
    {roll.rollName}
    </option>);
};

export default Roll;
