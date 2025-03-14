const Todo = ({ state, setJob, handlerAddJob, handlerDeleteJob, dispatch }) => {
  return (
    <div className="App">
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={state.input}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={() => handlerAddJob(state.input)}>Add</button>
      <ul>
        {state.list?.map((value) => (
          <li key={value} onClick={() => handlerDeleteJob(value)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
