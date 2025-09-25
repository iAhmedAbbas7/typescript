// <== IMPORTS ==>
import Counter from "./components/Counter";
import { initialState } from "./context/counter.store";
import { CounterProvider } from "./context/CounterContext";

const App = () => {
  return (
    <>
      <CounterProvider count={initialState.count} text={initialState.text}>
        <>
          <Counter>{(num: number) => <>Current Count : {num}</>}</Counter>
        </>
      </CounterProvider>
    </>
  );
};

export default App;
