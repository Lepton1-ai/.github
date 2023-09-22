import { useState, useEffect } from 'react';
import fs from 'fs';

const CountVisit = () => {
  const [count, setCount] = useState(0);

  fs.writeFile('saveinfo.json', JSON.stringify({ count: count }), (err: boolean) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully\n');
    }
  });

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

