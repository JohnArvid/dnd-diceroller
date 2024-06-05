import React from 'react';
import './rollinfo.styles.css';

// Need to define an interface for roll that has all the properties
interface RollInfoProps {
  rollInfo: string;
}

const Rollinfo: React.FC<RollInfoProps> = ({ rollInfo }) => {
  return <p>{rollInfo}</p>;
};

export default Rollinfo;
