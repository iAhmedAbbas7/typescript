// <== IMPORTS ==>
import { type ReactNode } from "react";
import { useCounterCount, useCounterText } from "../context/counter.store";

// <== COUNTER PROPS ==>
type ChildrenType = {
  children: (n: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounterCount();
  const { text, handleTextInput } = useCounterText();
  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input
        className="border-2 outline-none"
        type="text"
        onChange={handleTextInput}
      />
      <h2>{text}</h2>
    </>
  );
};

export default Counter;
