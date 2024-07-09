import React from 'react';
import './roll.styles.css';

import { RollProps } from '../../interfaces/interfaces';

const Roll: React.FC<RollProps> = ({ rollName }) => {
  return <span>{rollName}</span>;
};

export default Roll;
