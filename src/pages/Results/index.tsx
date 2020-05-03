import React from 'react';
import { useLocation } from 'react-router-dom';
import querystring from 'querystring';

const Results: React.FC = () => {
  const query = querystring.parse(useLocation().search.replace('?', ''));
  console.log(query.speech);
  return <></>;
};

export default Results;
