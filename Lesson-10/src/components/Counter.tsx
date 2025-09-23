//<== IMPORTS ==>
import { useState } from "react";

const Counter = () => {
  // COUNT STATE
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <section className="w-full flex items-center justify-center flex-col bg-gray-200 pb-6">
        <h2 className="text-5xl font-semibold text-red-500 pb-4">Counter</h2>
        <h3 className="text-2xl font-semibold text-center">
          Count is <span className="text-gray-500">{count}</span>
        </h3>
        <section className="w-full flex items-center justify-center gap-6">
          <button
            className="border-none outline-none text-[3rem] font-bold text-sky-500 p-0"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
          <button
            className="border-none outline-none text-[3rem] font-bold text-sky-500 p-0"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
        </section>
      </section>
    </>
  );
};

export default Counter;
