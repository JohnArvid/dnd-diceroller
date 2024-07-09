import React from 'react';
import './results.styles.css';

import Rollinfo from '../rollinfo/rollinfo.component';
import Rollresult from '../rollresult/rollresult.component';

import { ResultsProps } from '../../interfaces/interfaces';


const Results: React.FC<ResultsProps> = ({ result, rollInfo }) => {
  return (
    <>
      <Rollresult result={result} />
      <Rollinfo rollInfo={rollInfo} />
    </>
  );
};

export default Results;
