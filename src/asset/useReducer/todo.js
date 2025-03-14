import React, { useReducer } from "react";
import TodoList from "../../components/useReducer/todo";
import { setJob, addJob, deleteJob } from "./actions";
import reducer, { initialState } from "./reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlerAddJob = (value) => {
    dispatch(addJob(value));
    dispatch(setJob(""));
  };
  const handlerDeleteJob = (value) => {
    dispatch(deleteJob(value));
  };
  return (
    <TodoList
      state={state}
      setJob={setJob}
      handlerAddJob={handlerAddJob}
      handlerDeleteJob={handlerDeleteJob}
      dispatch={dispatch}
    />
  );
};
export default Todo;
