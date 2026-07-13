import { useState } from 'react';
import './App.scss';

export const App = () => {
  // `count` is stored 1 ahead of the displayed value, so the fixed
  // `increase` check (`count % 5 === 0`) evaluates against the counter
  // as it will be *after* the always-applied +1, per the task's
  // "condition must be checked after incrementing by 1" requirement.
  const [count, setCount] = useState(1);

  const addOne = () => {
    setCount(newCount => {
      const currentCount = newCount;
      const updatedCount = currentCount + 1;

      return updatedCount;
    });
  };

  const add100 = () => {
    setCount(newCount => {
      const currentCount = newCount;
      const updatedCount = currentCount + 100;

      return updatedCount;
    });
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count - 1}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
