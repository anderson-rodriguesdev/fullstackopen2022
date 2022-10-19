import React from 'react';
import Parts from './Parts';

const Content = (props) => {
  return (
    <>
      <Parts parts={props.parts} />
    </>
  );
};

export default Content;
