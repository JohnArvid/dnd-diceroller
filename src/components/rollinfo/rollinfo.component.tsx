import React from 'react';
import './rollinfo.styles.css';
import { ResultsProps } from '../../interfaces/interfaces';


const Rollinfo: React.FC<ResultsProps> = ({ rollInfo }) => {
  return <p>Roll name: {rollInfo.rollName}</p>;
};

export default Rollinfo;
