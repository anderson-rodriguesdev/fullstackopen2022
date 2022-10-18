import React from 'react';
import Statistics from './Components/Statistics';
import Button from './Components/Button';

function App() {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2);

  function handleGood(event) {
    event.preventDefault();
    setGood((prevState) => prevState + 1);
  }
  function handleNeutral(event) {
    event.preventDefault();
    setNeutral((prevState) => prevState + 1);
  }
  function handleBad(event) {
    event.preventDefault();
    setBad((prevState) => prevState + 1);
  }

  return (
    <>
      <h1>Give FeedBack</h1>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>
      {all ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      ) : (
        'No feedback given'
      )}
    </>
  );
}

export default App;
