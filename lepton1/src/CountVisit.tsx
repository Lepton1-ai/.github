import { useState, useEffect } from 'react';
import saveinfo from './saveinfo.json';

const CountVisit = () => {
  const [count, setCount] = useState(0);
  const oldCount = JSON.stringify(saveinfo);
  console.log(oldCount);

  useEffect(() => {
    const count = localStorage.getItem('count');
    if (count) {
      setCount(Number(count));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <div>
      <h1>Global Count Visit</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CountVisit;

