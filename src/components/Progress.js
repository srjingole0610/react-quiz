function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>Question {index + 1}</p>
      <span>
        {index + 1} of {numQuestions}
      </span>
      <p>
        <strong>{points}</strong> points, of {maxPossiblePoints} possible points
      </p>
    </header>
  );
}

export default Progress;
