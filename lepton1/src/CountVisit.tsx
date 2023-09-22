import { useState, useEffect } from 'react';

const CountVisit = () => {
  const [count, setCount] = useState(0);

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

