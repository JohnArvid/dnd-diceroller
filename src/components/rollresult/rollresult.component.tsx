import React from 'react';
import './rollresult.styles.css';

interface RollResultProps {
  result: string;
}

const Rollresult: React.FC<RollResultProps> = ({ result }) => {
  return <h3>{result}</h3>;
};

export default Rollresult;
