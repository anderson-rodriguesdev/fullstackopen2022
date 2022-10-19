import React from 'react';

const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => (
        <p key={item.id}>
          {item.name} {item.exercises}
        </p>
      ))}
      <strong>
        total of {parts.reduce((acc, item) => acc + item.exercises, 0)}{' '}
        exercises
      </strong>
    </div>
  );
};

export default Parts;
