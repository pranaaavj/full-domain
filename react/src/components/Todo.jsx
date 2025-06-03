import React, { useReducer } from 'react';

const Todo = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return Promise.reject('type not found');
    }
  }

  const handleUpdate = () => {
    try {
      dispatch({ type: 'decfasdrement' });
    } catch (error) {
      console.log(error);
    }
  };

  return <div onClick={() => handleUpdate()}>count {count}</div>;
};

export default Todo;
