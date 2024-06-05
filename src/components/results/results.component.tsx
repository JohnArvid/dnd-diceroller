import React from 'react';
import './results.styles.css';

import Rollinfo from '../rollinfo/rollinfo.component';
import Rollresult from '../rollresult/rollresult.component';

interface ResultsProps {
  result: string;
  rollInfo: string;
}

const Results: React.FC<ResultsProps> = ({ result, rollInfo }) => {
  return (
    <>
      <Rollresult result={result} />
      <Rollinfo rollInfo={rollInfo} />
    </>
  );
};

export default Results;
