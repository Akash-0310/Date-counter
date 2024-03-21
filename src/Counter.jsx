import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let newDate = new Date();
  newDate.setDate(newDate.getDate() + count);
  function handleStepDown() {
    setStep(step - 1);
  }

  function handleStepUp() {
    setStep(step + 1);
  }

  function handleCountDown() {
    setCount((c) => c - step);
  }

  function handleCountUp() {
    setCount((c) => c + step);
  }
  return (
    <div className="counter">
      <div className="btn">
        <button onClick={handleStepDown}>-</button>
        <p>Step : {step}</p>
        <button onClick={handleStepUp}>+</button>
      </div>
      <br></br>
      <div className="btn">
        <button onClick={handleCountDown}>-</button>
        <p>Count : {count} </p>
        <button onClick={handleCountUp}>+</button>
      </div>
      <p>
        {count === 0
          ? `Toady is ${newDate.toDateString()}`
          : count > 0
          ? `${count} days from Today is ${newDate.toDateString()}`
          : `${Math.abs(count)} days ago was ${newDate.toDateString()} `}
      </p>
    </div>
  );
}

export default Counter;
