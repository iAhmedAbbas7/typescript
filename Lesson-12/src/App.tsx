// <== IMPORTS ==>
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter>{(num: number) => <>Current Count : {num}</>}</Counter>
    </>
  );
};

export default App;
