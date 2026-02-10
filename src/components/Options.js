function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === questions.correctOption ? "correct" : "wrong") : ""}`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={option}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
