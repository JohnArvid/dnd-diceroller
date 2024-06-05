import React from 'react';
import './roll.styles.css';

interface RollProps {
  rollName: string;
}

const Roll: React.FC<RollProps> = ({ rollName }) => {
  return <span>{rollName}</span>;
};

export default Roll;
