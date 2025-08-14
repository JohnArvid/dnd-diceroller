import React from 'react';
import './rollresult.styles.css';
import { ResultsProps } from '../../interfaces/interfaces';


const Rollresult: React.FC<ResultsProps> = ({ result }) => {
  return <h3>Result: {result}</h3>;
};

export default Rollresult;
