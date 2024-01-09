import React from 'react';
import { useAppState } from './AppStateContext';

const Counter: React.FC = () => {
  const { state, dispatch } = useAppState();

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
