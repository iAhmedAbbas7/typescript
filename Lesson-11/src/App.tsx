// <== IMPORTS ==>
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

//<== USER INTERFACE ==>
interface User {
  id: number;
  username: string;
}
// <== FIBONACCI SEQUENCE ==>
type FibonacciSequence = (n: number) => number;

const App = () => {
  // HOOKS
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  useEffect(() => {
    console.log("Mounted!");
    console.log("Users : ", users);
    if (users?.length === 0) setUsers([]);
    return () => {
      console.log("Unmounted!");
    };
  }, [users]);
  const incrementCount = useCallback(
    (): void => setCount((prev) => prev + 1),
    []
  );
  const fibFunction: FibonacciSequence = useCallback((n: number) => {
    if (n < 2) return n;
    return fibFunction(n - 1) + fibFunction(n - 2);
  }, []);
  const myNumber: number = 30;
  const result = useMemo<number>(() => fibFunction(myNumber), [fibFunction]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={incrementCount}>+</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default App;
