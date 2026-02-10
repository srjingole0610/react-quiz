function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 80) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage < 50) emoji = "😕";
  if (percentage === 100) emoji = "🏆";
  if (percentage === 0) emoji = "😞";
  if (percentage > 0 && percentage < 50) emoji = "😕";

  return (
    <div className='result'>
      <span>{emoji}</span>
      <p>
        You scored {points} points out of {maxPossiblePoints} possible points
      </p>
      <p>Your percentage is {Math.ceil(percentage)}%</p>
      <p className='highscore'>(HighScore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}
      >
        Try again
      </button>
    </div>
  );
}

export default FinishScreen;
