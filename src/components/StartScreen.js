function StartScreen({ numQuestions, dispatch }) {
  function handleStart() {
    dispatch({ type: "start" });
  }
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} Questions to test you React Mastery</h3>
      <button onClick={handleStart} className='btn btn-ui'>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
