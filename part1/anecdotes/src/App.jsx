import React from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];
  const [selected, setSelected] = React.useState(0);
  const [votes, setVotes] = React.useState(new Array(anecdotes.length).fill(0));

  function handleAnecdote(event) {
    event.preventDefault();
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  }

  function handleVote(event) {
    event.preventDefault();
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }

  let mostVoted = Math.max(...votes);
  let mostVotedIndex = [...votes].findIndex((item) => item === mostVoted);

  return (
    <>
      <h2>Anectode of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleAnecdote}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <div>
        {mostVoted > 0 ? (
          <>
            <h2>Anectode with most votes</h2>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {votes[mostVotedIndex]} votes</p>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
