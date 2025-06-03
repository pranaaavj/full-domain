import { useContext } from 'react';
import { CounterContext } from './CounterContext';

const App = () => {
  const { count, increment } = useContext(CounterContext);

  return <div onClick={() => increment()}>{count}</div>;
};

export default App;
